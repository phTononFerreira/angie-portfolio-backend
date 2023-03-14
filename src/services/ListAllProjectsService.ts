import prismaClient from "../prisma";

class ListAllProjectsService {
    async execute() {
        try {
            const result = await prismaClient.projects.findMany({})
            return result
        } catch (err) {
            throw new Error("Não foi possível encontrar projeto.");
        }
        
    }
}

export { ListAllProjectsService };

