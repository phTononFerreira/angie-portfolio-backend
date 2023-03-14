import { AddProjectService } from "../services/AddProjectService";

class AddProjectController{
    async handle(req,res){
        const {name, description, date, softwares} = req.body
        if(!name  || !description){
            res.status(400).send("Atributo(s) não encontrado(s) na requisição.");
        }
        
        const result = await new AddProjectService().execute(name, description, date, softwares)

        return res.json(result)
    }
}

export { AddProjectController };

