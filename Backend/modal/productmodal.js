import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  quantity: { type: Number, required: true }
}, {
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

productSchema.virtual('id').get(function () {
  return this._id.toHexString();
});

const Product = mongoose.model('Product', productSchema);

export default Product;
