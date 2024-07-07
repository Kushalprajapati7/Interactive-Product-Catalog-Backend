import { Router } from 'express';
import ProductController from '../controllers/productConroller';
import verifyToken from '../middleware/authMiddleware';
import authorize from '../middleware/roleBase';
import upload from '../middleware/multer';

const router = Router();

router.post('/', verifyToken, authorize(['admin']), upload.single('image'),ProductController.createProduct);
router.get('/', verifyToken, ProductController.getAllProducts);
router.get('/:id', verifyToken, ProductController.getProductById);
router.put('/:id', verifyToken, authorize(['admin']),upload.single('image'), ProductController.updateProduct);
router.delete('/:id', verifyToken, authorize(['admin']), ProductController.deleteProduct);

export default router;
