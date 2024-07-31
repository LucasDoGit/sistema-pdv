import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const SaleSchema = new mongoose.Schema({
  sale: {
    products: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Product',
          required: true,
        },
        quantity: Number,
        price: Number,
      },
    ],
    productsVariedValues: [],
    descount: Number,
    total: Number,
  },

  seller: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Seller',
    default: null,
  },

  sellerCommission: {
    type: Number,
    default: 0,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

SaleSchema.plugin(mongoosePaginate);
const Sale = mongoose.model('Sale', SaleSchema);

export default Sale;
