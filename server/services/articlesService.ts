import {IArticleSchema, ICommentary, IGetArticlesParams, IGetArticlesResponse, language} from "../types/ArticlesTypes";
import Article from "../models/Article";
import sortString from "../utils/sortString";
import Category from "../models/Category";
import {ICategory} from "../types/CategoriesTypes";
import subscriptionHelper from "../helpers/subscribtionHelper";

class ArticlesService {
    async get({limit, language}: IGetArticlesParams) {
        const allArticles: IArticleSchema[] = await Article.find();
        const allCategories = await Category.find();
        if (allArticles.length === 0) throw new Error("No articles found");

        const allArticlesSorted = allArticles.sort((first, second) => sortString(first.category, second.category)).slice(0, limit ? limit : undefined);
        const articles: IGetArticlesResponse = [...allCategories.map((category: ICategory) => ({
                category: category.category,
                articles: [...allArticlesSorted.filter(filteredArticle => filteredArticle.category === category.category).map(article => ({
                    id: article.id,
                    image: article.image,
                    title: article[`title_${language}`],
                    paragraph: article[`paragraph_${language}`],
                    commentaries: article.commentaries,
                    createdAt: article.createdAt
                }))]
        }))].sort((first, second) => sortString(first.category, second.category));

        const sortedArticles: IGetArticlesResponse = limit ? articles.slice(0, limit) : articles;
        return sortedArticles;
    }

    async getOne(articleId: string, language: language) {
        const article = await Article.findById(articleId);
        if (!article) throw new Error("No article found")
        return {
            id: article.id,
            image: article.image,
            title: article[`title_${language}`],
            paragraph: article[`paragraph_${language}`],
            commentaries: article.commentaries,
            createdAt: article.createdAt
        }
    }

    async add(newArticle: IArticleSchema) {
        const createdArticle = await Article.create(newArticle);
        return subscriptionHelper(`${process.env.baseUrl}/articles:${createdArticle.id}`)
    }

    async addCommentary(commentary: ICommentary, articleId: string) {
        const article: IArticleSchema | null = await Article.findById(articleId);
        if (!article) throw new Error("Invalid data");
        return article.update({commentaries: [...article.commentaries, {...commentary}]})
    }
}

export default new ArticlesService();