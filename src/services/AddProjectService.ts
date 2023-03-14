import prismaClient from "../prisma";

class AddProjectService {
    async execute(name, description, date, softwares) {

        try {
            const result = await prismaClient.projects.create({
                data: {
                    name: name,
                    description: description,
                    date: date,
                    softwares: softwares
                }
            })
            return result
        } catch (err) {
            throw new Error("Não foi possível criar projeto.\n"+err);
        }
    }
}

export { AddProjectService };

