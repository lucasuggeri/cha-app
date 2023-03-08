import express from "express";
import http from "http";
import path from "path";
import { Server } from "socket.io";
import fs from "fs";

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.get("/", (req, res) => {
  res.sendFile(path.join(process.cwd(), "index.html"));
});

io.on("connection", (socket) => {
  console.log("a user connected");
});

io.on("connection", (socket) => {
  socket.on("chat message", (msg) => {
    const message = msg;
    fs.appendFile("log.txt", message);
  });
});

io.on("connection", (socket) => {
  socket.on("chat message", (msg) => {
    io.emit("chat message", msg);
  });
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});
