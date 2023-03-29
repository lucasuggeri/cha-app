import WebSocket from "ws";
import { createServer } from "ws";

const server = createServer({ port: 8080 });

server.on("connection", (socket) => {
  console.log("Novo cliente conectado.");

  socket.on("message", (data) => {
    console.log(`Mensagem recebida: ${data}`);

    // Faça algo com a mensagem recebida aqui
  });

  socket.on("close", () => {
    console.log("Cliente desconectado.");
  });
});

server.on("error", (error) => {
  console.error(`Erro ao iniciar o servidor WebSocket: ${error.message}`);
});
