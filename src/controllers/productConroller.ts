import { Request, Response } from 'express';
import ProductService from '../services/productService';

class ProductController {
    public async createProduct(req: Request, res: Response): Promise<void> {
        try {
            const newProduct = req.body;
            if (req.file) {
                const formattedPath = req.file.path.replace(/^src[\\\/]/, '');
                newProduct.imageUrl = formattedPath;
            }

            const product = await ProductService.createProduct(newProduct);
            res.json(product);
        } catch (error: any) {
            res.status(500).json({
                message: error.message
            });
        }
    }

    public async getProductById(req: Request, res: Response): Promise<void> {
        try {
            const productId = req.params.id;
            const product = await ProductService.getProductById(productId);
            if (!product) {
                res.status(404).json({ message: 'Product not found' });
                return;
            }
            res.json(product);
        } catch (error: any) {
            res.status(500).json({
                message: error.message
            });
        }
    }

    public async getAllProducts(req: Request, res: Response): Promise<void> {
        try {
            const products = await ProductService.getAllProducts();
            res.json(products);
        } catch (error: any) {
            res.status(500).json({
                message: error.message
            });
        }
    }

    public async updateProduct(req: Request, res: Response): Promise<void> {
        try {
            const productId = req.params.id;
            const updatedProduct = req.body;

            if (req.file) {
                const formattedPath = req.file.path.replace(/^src[\\\/]/, '');
                updatedProduct.imageUrl = formattedPath;    
            }

            const product = await ProductService.updateProduct(productId, updatedProduct);
            if (!product) {
                res.status(404).json({ message: 'Product not found' });
                return;
            }
            res.json(product);
        } catch (error: any) {
            res.status(500).json({
                message: error.message
            });
        }
    }

    public async deleteProduct(req: Request, res: Response): Promise<void> {
        try {
            const productId = req.params.id;
            await ProductService.deleteProduct(productId);
            res.json({ message: 'Product deleted successfully' });
        } catch (error: any) {
            res.status(500).json({
                message: error.message
            });
        }
    }
}

export default new ProductController();
