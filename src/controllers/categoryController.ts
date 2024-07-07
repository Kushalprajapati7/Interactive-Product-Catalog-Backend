import { Request, Response } from 'express';
import categoryService from '../services/categoryService';

class CategoryController {
    public async createCategory(req: Request, res: Response): Promise<void> {
        try {
            const newCategory = req.body;
            const category = await categoryService.createCategory(newCategory);
            res.status(201).json(category);
        } catch (error: any) {
            res.status(500).json({
                message: error.message
            });
        }
    }

    public async getAllCategories(req: Request, res: Response): Promise<void> {
        try {
            const categories = await categoryService.getAllCategories();
            if (!categories) {
                res.status(404).json({ error: "Categories Not Found!" });
                return;
            }
            res.status(200).json(categories);
        } catch (error: any) {
            res.status(500).json({
                message: error.message
            });
        }
    }

    public async getCategoryById(req: Request, res: Response): Promise<void> {
        try {
            const categoryId = req.params.id;
            const category = await categoryService.getCategoryById(categoryId);
            if (!category) {
                res.status(404).json({ error: "Category Not Found!" });
                return;
            }
            res.status(200).json(category);
        } catch (error: any) {
            res.status(500).json({
                message: error.message
            });
        }
    }

    public async updateCategory(req: Request, res: Response): Promise<void> {
        try {
            const categoryId = req.params.id;
            const updatedCategory = req.body;
            const category = await categoryService.updateCategory(categoryId, updatedCategory);
            if (!category) {
                res.status(404).json({ error: "Category Not Found!" });
                return;
            }
            res.status(200).json(category);
        } catch (error: any) {
            res.status(500).json({
                message: error.message
            });
        }
    }

    public async deleteCategory(req: Request, res: Response): Promise<void> {
        try {
            const categoryId = req.params.id;
            await categoryService.deleteCategory(categoryId);
            res.status(204).send();
        } catch (error: any) {
            res.status(500).json({
                message: error.message
            });
        }
    }
}

export default new CategoryController();
