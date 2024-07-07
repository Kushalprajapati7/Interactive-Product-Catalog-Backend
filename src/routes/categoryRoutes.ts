import { Router } from 'express';
import CategoryController from '../controllers/categoryController';
import verifyToken from '../middleware/authMiddleware';
import authorize from '../middleware/roleBase';

const router = Router();

router.post('/', verifyToken, authorize(['admin']), CategoryController.createCategory);
router.get('/', verifyToken, CategoryController.getAllCategories);
router.get('/:id', verifyToken, CategoryController.getCategoryById);
router.put('/:id', verifyToken, authorize(['admin']), CategoryController.updateCategory);
router.delete('/:id', verifyToken, authorize(['admin']), CategoryController.deleteCategory);

export default router;
