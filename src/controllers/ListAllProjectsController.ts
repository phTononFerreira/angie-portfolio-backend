
import { ListAllProjectsService } from "../services/ListAllProjectsService";

class ListAllProjectsController {
    async handle(req, res) {
        const result = await new ListAllProjectsService().execute()
        return res.json(result)
    }
}

export { ListAllProjectsController };

