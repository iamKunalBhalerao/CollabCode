import type WebSocket from "ws";
import * as Y from "yjs";

export interface Room {
  name: string;
  doc: Y.Doc;
  clients: Set<WebSocket>;
}
