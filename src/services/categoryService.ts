import Category from '../models/categoryModel';
import { ICategory } from '../interfaces/categoryInterface';

class CategoryService {

    public async createCategory(newCategory: ICategory): Promise<ICategory> {
        const category = new Category(newCategory);
        return await category.save();
    }

    public async getAllCategories(): Promise<ICategory[]> {
        return await Category.find();
    }

    public async getCategoryById(id: string): Promise<ICategory | null> {
        return await Category.findById(id);
    }

    public async updateCategory(id: string, updatedCategory: Partial<ICategory>): Promise<ICategory | null> {
        return await Category.findByIdAndUpdate(id, updatedCategory, { new: true, runValidators: true });
    }

    public async deleteCategory(id: string): Promise<void> {
        await Category.findByIdAndDelete(id);
    }
}

export default new CategoryService();
