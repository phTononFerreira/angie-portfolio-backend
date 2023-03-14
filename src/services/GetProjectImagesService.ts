import prismaClient from "../prisma";

class GetProjectImagesService {
    async execute(project_id) {

        try {
            const result = await prismaClient.images.findMany({
                where: {
                    project_id: Number(project_id)
                }
            })
        
            return result
        } catch (err) {
            throw new Error("Não foi possível encontrar projeto.");
        }
    }
}

export { GetProjectImagesService };

