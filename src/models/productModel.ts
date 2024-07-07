import mongoose, { Document, Schema } from 'mongoose';
import { IProduct } from '../interfaces/productInterface';

const ProductSchema: Schema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Product name is required'],
        trim: true
    },
    description: {
        type: String,
        required: [true, 'Product description is required'],
        trim: true
    },
    imageUrl: {
        type: String,
        required: [true, 'Image URL is required'],
        trim: true
    },
    price: {
        type: Number,
        required: [true, 'Product price is required'],
        min: [0, 'Product price must be a positive number']
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: [true, 'Product category is required']
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

const Product = mongoose.model<IProduct>('Product', ProductSchema);

export default Product;
