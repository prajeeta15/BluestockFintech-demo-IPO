// server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/IPO_DATA", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define Schema
const ipoSchema = new mongoose.Schema({
  company: String,
  priceBand: String,
  open: String,
  close: String,
  issueSize: String,
  issueType: String,
  listingDate: String,
  status: String,
});

const IPO = mongoose.model("IPO", ipoSchema);

// API endpoint to get all IPOs
app.get("/ipos", async (req, res) => {
  const ipos = await IPO.find();
  res.json(ipos);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
