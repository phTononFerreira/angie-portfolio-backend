import cloudinary from 'cloudinary';
import prismaClient from "../prisma";

class AddNewImageService {
  async execute(file, project_id) {
    const cloudinaryAPI = cloudinary.v2

    cloudinaryAPI.config({
      cloud_name: "dgejoa3jk",
      api_key: "382993585825893",
      api_secret: "x5ew55_BKz7-dlAMK93WapGjbFA"
    })

    // Tranformand buffer em 
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

