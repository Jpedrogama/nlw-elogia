import { request, response, Router } from "express";
import { ensureAdmin } from "./middlewares/isAdmin";
// Importação de Controllers
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagService";

const router = Router();

//Instanciando os controllers
const createUserController = new CreateUserController();
const createTagController = new CreateTagController();

router.post("/users", createUserController.handle);
router.post("/tags", ensureAdmin ,createTagController.handle);

export {router}