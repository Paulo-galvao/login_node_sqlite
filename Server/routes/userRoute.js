import e from "express";
import userController from "../controllers/userController.js";
import authVerification from "../middlewares/auth.js";

const router = e.Router();

router.post('/signin', userController.signin);
router.post('/login', userController.login);
router.get('/', authVerification, (req, res) => {
  res.send('Welcome to the User Area');
});


export default router;  