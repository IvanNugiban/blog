import {Request, Response} from "express";
import {ICategory, ICategoryParams} from "../types/CategoriesTypes";
import categoriesService from "../services/categoriesService";

class CategoriesController {

    async get(req: Request<{}, {}, {}, ICategoryParams>, res: Response) {
        try {
            const params: ICategoryParams = req.query;
            const categories: ICategory[] = await categoriesService.get(params);
            return res.json(categories);
        } catch (e) {
            return res.status(404).json("Categories not found")
        }
    }

    async add(req: Request, res: Response) {
        try {
            const category: ICategory = req.body;
            await categoriesService.add(category);
            res.json("Category added");
        } catch (e) {
            return res.status(400).json("Incorrect data");
        }
    }

}

export default new CategoriesController();