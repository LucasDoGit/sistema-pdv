import mongoose from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2'

const ProductSchema = new mongoose.Schema({
  barcode: {
    type: String,
  },

  name: {
    type: String,
    required: true,
  },

  amount: {
    type: Number,
    required: true,
  },

  salePrice: {
    type: Number,
    required: true,
  },

  expirationDate: {
    type: Date,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

ProductSchema.plugin(mongoosePaginate);
const Product = mongoose.model("Product", ProductSchema);

export default Product;
