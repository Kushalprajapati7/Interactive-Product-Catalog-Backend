import Product from '../models/productModel';
import { IProduct } from '../interfaces/productInterface';

class ProductService {
    public async createProduct(newProduct: IProduct): Promise<IProduct> {
        const product = new Product(newProduct);
        return await product.save();
    }

    public async getProductById(productId: string): Promise<IProduct | null> {
        return await Product.findById(productId).populate('category');
    }

    public async getAllProducts(): Promise<IProduct[]> {
        return await Product.find().populate('category', 'name');
    }

    public async updateProduct(productId: string, updatedProduct: Partial<IProduct>): Promise<IProduct | null> {
        return await Product.findByIdAndUpdate(productId, updatedProduct, { new: true }).populate('category');
    }

    public async deleteProduct(productId: string): Promise<void> {
        await Product.findByIdAndDelete(productId);
    }
}

export default new ProductService();
