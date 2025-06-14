const mongoose = require("mongoose");

const ipoSchema = new mongoose.Schema({
  company: String,
  priceBand: String,
  open: String,
  close: String,
  issueSize: String,
  issueType: String,
  listingDate: String,
  status: String,
  ipoPrice: String,
  listingPrice: String,
  listingGain: String,
  cmp: String,
  currentReturn: String,
  rhp: String,
  drhp: String,
  logo: String, // optional: base64 or file path
});

module.exports = mongoose.model("IPO", ipoSchema);
