import { configDotenv } from "dotenv";
configDotenv();
import app from "./app";
import http from "http";
import { WebSocketServer } from "ws";
import { handleConnection } from "./websocket/ws";

const PORT = process.env.PORT || 3000;

const server = http.createServer(app);

const wss = new WebSocketServer({ server });

wss.on("connection", handleConnection);

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
