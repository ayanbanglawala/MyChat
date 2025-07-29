import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectToMongo from "./db/connectDB.js";
import { server, app, io } from "./socket/socket.js"; // Import app and server from socket setup

// Load environment variables
dotenv.config();

const port = process.env.PORT || 4000;

const __dirname = path.resolve();

// Middleware setup
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: [
      "http://localhost:5000",              // local frontend (dev)
      "https://my-chat-app-phi-nine.vercel.app" // deployed frontend (prod)
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true, // allow cookies and auth headers
  })
);

// Database connection
connectToMongo();

// Set up routes
app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes); // Make sure this route is correct
app.use("/api/users", userRoutes);

// Start the server
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
