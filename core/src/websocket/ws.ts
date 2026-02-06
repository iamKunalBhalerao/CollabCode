import { WebSocket } from "ws";
import * as Y from "yjs";
import * as syncProtocol from "y-protocols/sync";
import * as encoding from "lib0/encoding";
import * as decoding from "lib0/decoding";
import { broadcast, getRoom } from "../utils/ws.utils";
import type { Room } from "../types/ws.types";
import { IncomingMessage } from "http";

export const rooms = new Map<string, Room>();

const messageSync = 0;

const sendSyncStep1 = (socket: WebSocket, doc: Y.Doc) => {
  const encoder = encoding.createEncoder();
  encoding.writeVarUint(encoder, messageSync);
  syncProtocol.writeSyncStep1(encoder, doc);
  socket.send(encoding.toUint8Array(encoder));
};

export const handleConnection = (
  socket: WebSocket,
  request: IncomingMessage,
) => {
  let currentRoom: Room | null | undefined = null;

  // Extract room name from URL
  const urlRoom = (request.url || "").slice(1).split("?")[0];
  if (urlRoom && urlRoom !== "") {
    currentRoom = getRoom(urlRoom) || null;
    if (currentRoom) {
      currentRoom.clients.add(socket);
      // Send sync step 1 to new client
      sendSyncStep1(socket, currentRoom.doc);
    }
  }

  socket.on("message", (data) => {
    // Handle JSON messages
    if (data instanceof Buffer || typeof data === "string") {
      const messageString = data.toString();
      if (messageString.startsWith("{") || messageString.startsWith("[")) {
        try {
          const message = JSON.parse(messageString);

          if (message.type === "join") {
            if (currentRoom) {
              currentRoom.clients.delete(socket);
            }

            currentRoom = getRoom(message.room) || null;
            if (currentRoom) {
              currentRoom.clients.add(socket);

              socket.send(
                JSON.stringify({
                  type: "joined",
                  room: message.room,
                  clients: currentRoom.clients.size,
                }),
              );

              broadcast(
                currentRoom,
                JSON.stringify({
                  type: "user-joined",
                  clients: currentRoom.clients.size,
                }),
                socket,
              );

              // Send sync step 1 instead of raw state
              sendSyncStep1(socket, currentRoom.doc);
            }
          }

          if (message.type === "custom") {
            if (currentRoom) {
              broadcast(currentRoom, JSON.stringify(message), socket);
            }
          }

          return;
        } catch (e) {
          // Not a JSON message, proceed to Yjs handling
        }
      }
    }

    // Handle binary Yjs sync messages
    if (currentRoom && data instanceof Buffer) {
      try {
        const uint8Data = new Uint8Array(data);
        const decoder = decoding.createDecoder(uint8Data);
        const messageType = decoding.readVarUint(decoder);

        if (messageType === messageSync) {
          const encoder = encoding.createEncoder();
          encoding.writeVarUint(encoder, messageSync);
          const syncMessageType = syncProtocol.readSyncMessage(
            decoder,
            encoder,
            currentRoom.doc,
            socket,
          );

          // If there's a response (sync step 2), send it back
          if (encoding.length(encoder) > 1) {
            socket.send(encoding.toUint8Array(encoder));
          }

          // Broadcast updates to other clients
          if (
            syncMessageType === syncProtocol.messageYjsSyncStep2 ||
            syncMessageType === syncProtocol.messageYjsUpdate
          ) {
            broadcast(currentRoom, data, socket);
          }
        }
      } catch (e) {
        console.error("Error handling Yjs message:", e);
      }
    }
  });

  socket.on("close", (_code, _reason) => {
    if (currentRoom) {
      currentRoom.clients.delete(socket);

      broadcast(
        currentRoom,
        JSON.stringify({
          type: "user-left",
          clients: currentRoom.clients.size,
        }),
      );

      if (currentRoom.clients.size === 0) {
        rooms.delete(currentRoom.name);
      }
    }
  });

  socket.on("error", (error: Error) => {
    console.error(`Error occurred: ${error.message}`);
  });
};
