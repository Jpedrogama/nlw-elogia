import { request, response, Router } from "express";
import { ensureAdmin } from "./middlewares/isAdmin";
// Importação de Controllers
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagService";
import { AutheticateUserController} from "./controllers/AuthenticateUserController";

const router = Router();

//Instanciando os controllers
const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AutheticateUserController();

router.post("/users", createUserController.handle);
router.post("/tags", ensureAdmin ,createTagController.handle);
router.post("/login", authenticateUserController.handle);

export {router}