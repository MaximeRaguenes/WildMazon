import * as mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
});

const ProductModel = mongoose.model('Product', ProductSchema);

export default ProductModel;
