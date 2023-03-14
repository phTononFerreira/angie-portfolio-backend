import { Router } from 'express';
import multer from 'multer';

// CONTROLLERS
import { AddNewImageController } from './controllers/AddNewImageController';
import { AddProjectController } from './controllers/AddProjectController';
import { GetProjectImagesController } from './controllers/GetProjectImagesController';
import { ListAllProjectsController } from './controllers/ListAllProjectsController';

//  MIDDLEWARES
import { tokenCheck } from './middlewares/tokenCheck';

const router = Router();
const storage = multer.memoryStorage();
const upload = multer({ storage });



//  ROTAS

//                      ''IMAGES''
router.post('/image', tokenCheck, upload.single('file'), new AddNewImageController().handle)

//                      ''PROJECTS''
router.post('/project', tokenCheck, new AddProjectController().handle)
router.get('/project', tokenCheck, new ListAllProjectsController().handle)
router.get('/project/images', tokenCheck, new GetProjectImagesController().handle)

export { router };

