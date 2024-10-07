import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js";
import connectToMongo from "./db/connectDB.js";

const app = express();
const port = process.env.PORT || 4000;

dotenv.config();

// Middleware to parse JSON requests
app.use(express.json());

// Connect to MongoDB before starting the server
connectToMongo();

app.use("/api/auth", authRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
