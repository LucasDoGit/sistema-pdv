import e from "express";
import mongoose from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2';

const EntranceSchema = new mongoose.Schema({
  sale: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Sale",
  },

  value: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

EntranceSchema.plugin(mongoosePaginate);
const Entrance = mongoose.model("Entrance", EntranceSchema);

export default Entrance;
