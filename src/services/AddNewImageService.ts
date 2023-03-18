import cloudinary from 'cloudinary';
import prismaClient from "../prisma";

class AddNewImageService {
  async execute(file, project_id) {
    const cloudinaryAPI = cloudinary.v2

    cloudinaryAPI.config({
      cloud_name: process.env.CLOUD_NAME,
      api_key: process.env.API_KEY,
      api_secret: process.env.API_SECRET
    })

    // Tranformando buffer em 64bits
    const DatauriParser = require("datauri/parser");
    const parser = new DatauriParser();
    file.originalname = file.originalname.split('.')[0]
    const file64 = parser.format(file.originalname, file.buffer);

    const response = await cloudinaryAPI.uploader.upload(file64.content!)

    try {
      // Salva a imagem no banco de dados utilizando Prisma
      const result = await prismaClient.images.create({
        data: {
          name: file.originalname,
          url: response.secure_url,
          project: {
            connect: { id: Number(project_id) },
          },
        },
      });

      return result;
    } catch (error) {
      throw new Error("Não foi possível salvar a imagem no banco de dados.");
    }
  }

}


export { AddNewImageService };

