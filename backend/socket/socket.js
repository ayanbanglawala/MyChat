import http from "http";
import express from "express";
import { Server } from "socket.io";

const app = express();

// Create an HTTP server
const server = http.createServer(app);

// Initialize Socket.io with CORS configuration
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:5000"], // Match this with your frontend origin
    methods: ["GET", "POST"],
  },
});

export const getReceiverSocketId = (receiverId)=>{
  return userSocketMap[receiverId];
}

const userSocketMap = {};
// Socket.io connection handling
io.on("connection", (socket) => {
  console.log("A new client connected:", socket.id);
    const userId = socket.handshake.query.userId;
    if(userId != "undefined") userSocketMap[userId] = socket.id;

    io.emit("getOnlineUsers", Object.keys(userSocketMap))
    // Handle disconnection
    socket.on("disconnect", () => {
        console.log("A client disconnected:", socket.id);
        delete userSocketMap[userId]
        io.emit("getOnlineUsers", Object.keys(userSocketMap))
  });
});

// Export the app, server, and io instances for use in other files
export { app, server, io };
