import mongoose from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2';

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

CategorySchema.plugin(mongoosePaginate);
const Category = mongoose.model("Category", CategorySchema);

export default Category;