const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require("cors");

// Create the connection

mongoose.connect("mongodb://localhost:27017/ecommerce", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use(cors());

const productSchema = new mongoose.Schema({
  title: String,
  type: String,
  description: String,
  price: Number,
  image: String,
});

const Product = mongoose.model("Product", productSchema);

const seedDatabase = async () => {
  try {
    await Product.deleteMany();
    const products = [
      {
        title: "GFG Hoodie-White",
        type: "Clothing",
        description: "Comfortable to wear for the winters",
        price: 50,
        image:
          "https://media.geeksforgeeks.org/wp-content/uploads/20240103185713/hoodie.jpg",
      },
      {
        title: "GFG Hoodie-black",
        type: "Clothing",
        description: "Comfortable to wear for the winters",
        price: 60,
        image:
          "https://media.geeksforgeeks.org/wp-content/uploads/20240103185847/black-hoodie.webp",
      },
      {
        title: "GFG T-shirt",
        type: "Clothing",
        description: "Very smooth and comfortable to wear",
        price: 25,
        image:
          "https://media.geeksforgeeks.org/wp-content/uploads/20230407153931/gfg-tshirts.jpg",
      },
      {
        title: "GFG-Bag",
        type: "Stationary",
        description: "HAndy bag for keeping all your equipmements",
        price: 120,
        image:
          "https://media.geeksforgeeks.org/wp-content/uploads/20230407154213/gfg-bag.jpg",
      },
    ];

    await Product.insertMany(products);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

seedDatabase();

app.get("/api/products", async (req, res) => {
  try {
    const allProducts = await Product.find();

    res.json(allProducts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
