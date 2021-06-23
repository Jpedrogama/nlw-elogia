import { request, response, Router } from "express";

// Importação de Controllers
import { CreateUserController } from "./controllers/CreateUserController";

const router = Router();

//Instanciando os controllers
const createUserController = new CreateUserController();

router.post("/users", createUserController.handle);

export {router}