import mongoose from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2';

const ExitSchema = new mongoose.Schema({
  descriptionExit: String,

  value: {
    type: Number,
    required: true,
  },

  date: {
    type: Date,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

ExitSchema.plugin(mongoosePaginate);
const Exit = mongoose.model("Exit", ExitSchema);

export default Exit;
