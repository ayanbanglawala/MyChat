import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

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
// Connect to MongoDB before starting the server
connectToMongo();

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);
app.use("/api/users", userRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
