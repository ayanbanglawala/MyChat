import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors"; // Import cors middleware

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectToMongo from "./db/connectDB.js";

const app = express();
const port = process.env.PORT || 4000;

dotenv.config();

// Middleware to parse JSON requests
app.use(express.json());
app.use(cookieParser());

// Use CORS middleware
app.use(cors({
  origin: "http://localhost:5173", // Allow requests from this origin
  methods: ["GET", "POST", "PUT", "DELETE"], // Allow these HTTP methods
  allowedHeaders: ["Content-Type", "Authorization"] // Allow these headers
}));

// Connect to MongoDB before starting the server
connectToMongo();

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);
app.use("/api/users", userRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
