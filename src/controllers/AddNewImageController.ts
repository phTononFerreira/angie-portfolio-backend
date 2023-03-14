import { AddNewImageService } from "../services/AddNewImageService";

class AddNewImageController {
    async handle(req, res) {
        const file = req.file;
        const { project_id } = req.body

        if (!file || !project_id) {
            res.status(400).send("Arquivo não encontrado na requisição.");
        }
        
        const result = await new AddNewImageService().execute(file, project_id)

        return res.json(result);
    }

}


export { AddNewImageController };

