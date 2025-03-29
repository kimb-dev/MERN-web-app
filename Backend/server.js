import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // allows JSON data in req.body

app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send("✅ API is running... 🎉");
});

// ✅ Connect to DB first, then start server
const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server started at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error(`Error connecting to DB: ${error.message}`);
    process.exit(1); // 💥 Exit the app if DB fails
  }
};

startServer();
