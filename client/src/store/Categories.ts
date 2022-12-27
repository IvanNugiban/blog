import {makeAutoObservable, runInAction} from "mobx";
import axios, {AxiosResponse} from "axios";
import {baseUrl} from "../utils/constants";
import {ICategory} from "../types/CategoriesTypes";

class Categories {
    categories: ICategory[] = [];
    chosenCategory : string = "All categories";
    error: unknown | undefined = undefined;
    isLoading = false;

    constructor() {
        makeAutoObservable(this);
    }

    async fetchCategories(limit: number | undefined) {
        console.log(limit);
        this.isLoading = true;
        try {
            const categories: AxiosResponse<ICategory[]> = await axios.get(`${baseUrl}/api/categories/get`, {
                params: {
                    limit
                }
            });
            runInAction(() => this.categories = categories.data)
        } catch (e) {
            runInAction(() => this.error = e)
        } finally {
            runInAction(() => this.isLoading = false)
        }
    }

    setCategory(category : string) {
        this.chosenCategory = category;
    }
}

export default new Categories();