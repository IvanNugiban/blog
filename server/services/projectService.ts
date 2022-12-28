import Project from "../models/Project";
import {IProject, IProjectSchema} from "../types/ProjectTypes";
import {language} from "../types/ArticlesTypes";
import subscriptionHelper from "../helpers/subscribtionHelper";

class ProjectService {

    async get(language: language) {
        const allProjects: IProjectSchema[] = await Project.find();
        if (allProjects.length === 0) throw new Error("No projects found");
        return allProjects.map(project => ({
            id: project.id,
            title: project[`title_${language}`],
            images: project.images,
            description: project[`description_${language}`],
            link : project.link
        })) as IProject[];
    }

    async add(newProject: IProjectSchema) {
        await Project.create(newProject);
        return subscriptionHelper(`${process.env.baseUrl}/projects`)
    }
}

export default new ProjectService();