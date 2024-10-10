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
    origin: "http://localhost:5000", // Allow frontend requests from this origin
    methods: ["GET", "POST", "PUT", "DELETE"], // Allow these HTTP methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allow these headers
  })
);

// Database connection
connectToMongo();

// Set up routes
app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes); // Make sure this route is correct
app.use("/api/users", userRoutes);


app.use(express.static(path.join(__dirname, "/frontend/dist")))

app.get("*", (req,res)=>{
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"))
})

// Start the server
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
