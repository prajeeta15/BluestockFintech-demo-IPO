const express = require("express");
const router = express.Router();
const IPO = require("../models/IPO");

// GET all IPOs
router.get("/", async (req, res) => {
  try {
    const ipos = await IPO.find();
    res.json(ipos);
  } catch (err) {
    res.status(500).json({ message: "Error fetching IPOs", error: err });
  }
});

// GET IPO by MongoDB ID
router.get("/:id", async (req, res) => {
  try {
    const ipo = await IPO.findById(req.params.id);
    if (!ipo) return res.status(404).json({ message: "IPO not found" });
    res.json(ipo);
  } catch (err) {
    res.status(500).json({ message: "Error fetching IPO", error: err });
  }
});

// GET IPO by company name slug (e.g., tcs-ltd)
router.get("/company/:slug", async (req, res) => {
  try {
    const slug = req.params.slug.toLowerCase();
    const ipos = await IPO.find();
    const ipo = ipos.find(i =>
      i.company.toLowerCase().replace(/\s+/g, "-") === slug
    );
    if (!ipo) return res.status(404).json({ message: "IPO not found by slug" });
    res.json(ipo);
  } catch (err) {
    res.status(500).json({ message: "Error fetching IPO by slug", error: err });
  }
});

// POST a new IPO
router.post("/", async (req, res) => {
  try {
    const newIPO = new IPO(req.body);
    await newIPO.save();
    res.status(201).json(newIPO);
  } catch (err) {
    res.status(400).json({ message: "Error saving IPO", error: err });
  }
});

// PUT update IPO by ID
router.put("/:id", async (req, res) => {
  try {
    const updatedIPO = await IPO.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedIPO) return res.status(404).json({ message: "IPO not found" });
    res.json(updatedIPO);
  } catch (err) {
    res.status(400).json({ message: "Error updating IPO", error: err });
  }
});

// DELETE IPO by ID
router.delete("/:id", async (req, res) => {
  try {
    const deletedIPO = await IPO.findByIdAndDelete(req.params.id);
    if (!deletedIPO) return res.status(404).json({ message: "IPO not found" });
    res.json({ message: "IPO deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting IPO", error: err });
  }
});

module.exports = router;
