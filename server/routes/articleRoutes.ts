import Router from "express";
import ArticlesController from "../controllers/articlesController";
import articlesController from "../controllers/articlesController";

const router = Router();


router.get('/get', ArticlesController.get);
router.get('/getOne', ArticlesController.getOne)
router.post('/add' ,ArticlesController.add)
router.post('/addCommentary', articlesController.addCommentary)

export default router;