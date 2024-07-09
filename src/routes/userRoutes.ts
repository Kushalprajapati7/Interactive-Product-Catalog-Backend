import userController from "../controllers/userController";
import { Router } from "express";
import verifyToken from "../middleware/authMiddleware";
import authorize from "../middleware/roleBase";

const router = Router();

router.post('/register', userController.creatUser);
router.post('/login', userController.loginUser)
router.get('/allUser', verifyToken, authorize(['admin']), userController.getAllUser)
router.get('/:id', verifyToken, authorize(['admin']), userController.getUserById)
router.put('/:id', verifyToken, authorize(['admin']), userController.updateUser)
router.delete('/deleteUser/:id', verifyToken, authorize(['admin']), userController.deleteUser)


export default router;