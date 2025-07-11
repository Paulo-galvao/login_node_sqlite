import e from "express";
import userController from "../controllers/userController.js";

const router = e.Router();

router.get('/', userController.show);
router.post('/signin', userController.signin);
router.post('/login', userController.login);


export default router;