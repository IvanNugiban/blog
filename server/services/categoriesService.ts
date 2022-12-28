import Category from "../models/Category"
import {ICategory, ICategoryParams} from "../types/CategoriesTypes";
import sortString from "../utils/sortString";
import subscriptionHelper from "../helpers/subscribtionHelper";

class CategoriesService {
    async get(params : ICategoryParams) : Promise<ICategory[]> {
        const categories : ICategory[] = await Category.find();
        if (categories.length === 0) throw new Error("No categories found");

        const sortedCategories = categories.sort((first, second) => sortString(first.category, second.category));

        const categoriesToReturn : ICategory[] = params.limit ? sortedCategories.slice(0, params.limit).sort((first, second) => sortString(first.category, second.category)) : sortedCategories;

        return categoriesToReturn.map(category => ({
            id: category.id,
            image: category.image,
            category: category.category
        }));
    }

    async add(category : ICategory) {
        await Category.create(category);
        return subscriptionHelper(`${process.env.baseUrl}/projects`)
    }
}

export default new CategoriesService();