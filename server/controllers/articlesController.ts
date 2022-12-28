import {
    IArticle,
    IArticleSchema, ICommentary,
    IGetArticlesParams,
    IGetArticlesResponse,
    IGetOneArticleParams
} from "../types/ArticlesTypes";
import {Request, Response} from "express";
import articlesService from "../services/articlesService";
import ArticlesService from "../services/articlesService";

class ArticlesController {
    async get(req: Request<{}, {}, {}, IGetArticlesParams>, res: Response) {
        try {
            const params = req.query;
            const articles: IGetArticlesResponse = await articlesService.get(params);
            res.json(articles);
        }
        catch  {
            return res.status(404).json("No articles found");
        }
    }

    async getOne(req: Request<{}, {}, {}, IGetOneArticleParams>, res: Response) {
        try {
            const {articleId, language} = req.query;
            const article : IArticle = await  articlesService.getOne(articleId, language);
            res.json(article)
        }
        catch (e) {
            return res.status(404).json("No article found");
        }
    }

    async add(req: Request, res: Response) {
        try {
            const newNote: IArticleSchema = req.body;
            await articlesService.add(newNote);
            res.json("Article created")
        }
        catch (e) {
            return res.status(400).json(e);
        }
    }

    async addCommentary(req: Request, res: Response) {

        try {
            console.log(req.body);
            const {commentary, articleId} : {commentary: ICommentary, articleId: string} = req.body;
            await ArticlesService.addCommentary(commentary, articleId);
            res.json("Commentary added")
        }
        catch (e) {
            return res.status(400).json("Incorrect data");
        }
    }
}

export default new ArticlesController();