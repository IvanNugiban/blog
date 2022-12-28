import Router from "express";
import projectsController from "../controllers/projectsController";

const router = Router();

router.get("/get", projectsController.get);
router.post("/add" , projectsController.add);


export default router;

