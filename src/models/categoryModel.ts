import mongoose, { Document, Schema } from 'mongoose';
import { ICategory } from '../interfaces/categoryInterface';

const CategorySchema: Schema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Category name is required'],
        trim: true,
        unique: true
    },
    description: {
        type: String,
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },

}, {
    timestamps: true
});

const Category = mongoose.model<ICategory>('Category', CategorySchema);

export default Category;
