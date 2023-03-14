import { GetProjectImagesService } from "../services/GetProjectImagesService";

class GetProjectImagesController {
    async handle(req, res) {
        const { project_id } = req.query
        if (!project_id) {
            res.status(400).send("Atributo(s) não encontrado(s) na requisição.");
        }

        const result = await new GetProjectImagesService().execute(project_id)

        return res.json(result)
    }
}

export { GetProjectImagesController };

