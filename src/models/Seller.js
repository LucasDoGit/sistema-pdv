import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const SellerSchema = new mongoose.Schema({
  name: {
    type: String,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

SellerSchema.plugin(mongoosePaginate);
const Seller = mongoose.model('Seller', SellerSchema);

export default Seller;
