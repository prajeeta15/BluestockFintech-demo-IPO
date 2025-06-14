const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public")); 
mongoose.connect("mongodb://127.0.0.1:27017/IPO_DATA");

const ipoSchema = new mongoose.Schema({ /* ... */ });
const IPO = mongoose.model("IPO", ipoSchema);

app.get("/ipos", async (req, res) => res.json(await IPO.find()));
app.post("/ipos", async (req, res) => res.json(await new IPO(req.body).save()));

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
