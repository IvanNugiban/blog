import {Request, Response} from "express";
import projectService from "../services/projectService";
import {IProject, IProjectSchema} from "../types/ProjectTypes";
import {language} from "../types/ArticlesTypes";

class ProjectsController {

    async get(req: Request<undefined, undefined, undefined, { language: language }>, res: Response) {
        try {
            const {language} = req.query;
            const projects: IProject[] = await projectService.get(language);
            res.json(projects)
        }

        catch {
            return res.status(404).json("No projects found");
        }
    }

    async add(req: Request, res: Response) {
        try {
            const newProject: IProjectSchema = req.body;
            await projectService.add(newProject);
            res.json("Project added!")
        } catch (e) {
            console.log(e);
            res.status(400).json(e);
        }

    }
}

export default new ProjectsController();