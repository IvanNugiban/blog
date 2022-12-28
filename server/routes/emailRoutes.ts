import Router from "express";
import emailController from "../controllers/emailController";
const router = Router();


router.post("/add" , emailController.add);
router.delete("/unsubscribe", emailController.unsubscribe)

export default router;

