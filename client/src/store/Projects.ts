import {makeAutoObservable, runInAction} from "mobx";
import axios, {AxiosResponse} from "axios";
import {baseUrl} from "../utils/constants";
import {IProject} from "../types/ProjectsTypes";

class Projects {
    projects: IProject[] = [];
    error: unknown | undefined = undefined;
    isLoading = false;

    constructor() {
        makeAutoObservable(this);
    }

    async fetchProjects(language: string) {
        this.isLoading = true;
        try {
            const articles: AxiosResponse<IProject[]> = await axios.get(`${baseUrl}/api/projects/get`, {
                params: {
                    language
                }
            });
            runInAction(() => this.projects = articles.data)
        } catch (e) {
            runInAction(() => this.error = e)
        } finally {
            runInAction(() => this.isLoading = false)
        }
    }

}

export default new Projects();