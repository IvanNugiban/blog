import {makeAutoObservable, runInAction} from "mobx";
import {IArticle, IArticlesResponseData, ICommentary} from "../types/ArticlesTypes";
import axios, {AxiosResponse} from "axios";
import {baseUrl} from "../utils/constants";
import Categories from "./Categories";

class Articles {
    articles: IArticlesResponseData[] = [];
    chosenArticle: IArticle = {} as IArticle;
    error: unknown | undefined = undefined;
    isLoading = false;

    constructor() {
        makeAutoObservable(this);
    }

    async fetchArticles(language: string, limit: number | undefined) {
        this.isLoading = true;
        try {
            const articles: AxiosResponse<IArticlesResponseData[]> = await axios.get(`${baseUrl}/api/articles/get`, {
                params: {
                    limit,
                    language
                }
            });
            runInAction(() => this.articles = articles.data)
        } catch (e) {
            runInAction(() => this.error = e)
        } finally {
            runInAction(() => this.isLoading = false)
        }
    }

    async getChosenArticle(articleId: string, language: string) {
        this.isLoading = true;
        try {
            const article: AxiosResponse<IArticle> = await axios.get(`${baseUrl}/api/articles/getOne`, {
                params: {
                    articleId,
                    language
                }
            });
            runInAction(() => this.chosenArticle = article.data)
        } catch (e) {
            runInAction(() => this.error = e)
        } finally {
            runInAction(() => this.isLoading = false)
        }
    }

    async addCommentary(commentary: ICommentary , articleId: string) {
        this.isLoading = true;
        try {
            await axios.post(`${baseUrl}/api/articles/addCommentary`, {
                articleId,
                commentary
            });
            runInAction(() => this.chosenArticle.commentaries = [...this.chosenArticle.commentaries, commentary])
        } catch (e) {
            runInAction(() => this.error = e)
        } finally {
            runInAction(() => this.isLoading = false)
        }
    }

    get filteredArticles() {
        if (Categories.chosenCategory === "All categories") return this.articles;
        return this.articles.filter(articleSection => articleSection.category === Categories.chosenCategory)
    }
}

export default new Articles();