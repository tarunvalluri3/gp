import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

/* ---------------- DB CONNECT ---------------- */

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => {
    console.error("DB failed");
    process.exit(1);
  });

/* ---------------- SCHEMA ---------------- */

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    brand: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true }
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

/* ---------------- ROUTES ---------------- */

/* Admin — create product */
app.post("/admin/products", async (req, res) => {
  try {
    const { name, brand, description, price, stock } = req.body;

    if (!name || !brand || !description || !price || !stock) {
      return res.status(400).json({ message: "All fields required" });
    }

    const product = await Product.create({
      name,
      brand,
      description,
      price: Number(price),
      stock: Number(stock)
    });

    res.status(201).json(product);

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Insert failed" });
  }
});

app.get("/products", async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch products" });
  }
});


/* ---------------- START SERVER ---------------- */

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
