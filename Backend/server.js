import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import Product from './modal/productmodal.js';
import { connectDB } from "./config/db.js"

const app = express();
app.use(bodyParser.json());


// Create product
app.post('/products/create', async (req, res) => {
  const { name, quantity } = req.body;
  const product = new Product({ name, quantity });
  await product.save();
  res.status(201).json({ data: { product } });
});

// List products
app.get('/products', async (req, res) => {
  const products = await Product.find();
  res.status(200).json({ data: { products } });
});

// Delete product by ID
app.delete('/products/:id', async (req, res) => {
  const { id } = req.params;
  await Product.findByIdAndDelete(id);
  res.status(200).json({ message: 'Product deleted' });
});

// Update product quantity
app.put('/products/:id', async (req, res) => {
  const { id } = req.params;
  const { quantity } = req.body;
  const product = await Product.findByIdAndUpdate(id, { quantity }, { new: true });
  res.status(200).json({ data: { product } });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB()
 
});
