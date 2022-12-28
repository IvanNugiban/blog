import Router from "express";
import categoriesController from "../controllers/categoriesController"


const router = Router();

router.get("/get", categoriesController.get)
router.post("/add" , categoriesController.add);

export default router;