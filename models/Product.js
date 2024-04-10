const { model, Schema } = require("mongoose");

const productSchema = new Schema({
  title: { type: String },
  description: { type: String },
  price: { type: Number },
  rating: { type: Number },
  imageURL: { type: String },
  category: { type: String }
});

module.exports = model("Product", productSchema);