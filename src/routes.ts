import { Router } from "express";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { ensureAuth } from "./middlewares/ensureAuth";

// Importação de Controllers
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagService";
import { AutheticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { ListReceivedComplimentsByUserController } from "./controllers/ListReceivedComplimentsByUserController";
import { ListSentComplimentsByUserController } from "./controllers/ListSentComplimentsByUserController";
import { ListTagsController } from "./controllers/ListTagsController";
import { ListUsersController } from "./controllers/ListUsersController";

const router = Router();

//Instanciando os controllers
const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AutheticateUserController();
const createComplimentController = new CreateComplimentController();
const listReceivedComplimentsByUserController = new ListReceivedComplimentsByUserController();
const listSentComplimentsByUserController = new ListSentComplimentsByUserController();
const listTagsController  = new ListTagsController();
const listUserController = new ListUsersController();

// Rotas de usuarios
router.post("/login", authenticateUserController.handle);
router.post("/users", createUserController.handle);
router.get("/listusers", ensureAuth, listUserController.handle)

// Rotas de tags
router.post("/tags", ensureAuth, ensureAdmin, createTagController.handle);
router.get("/tags", ensureAuth, listTagsController.handle);

// Rotas de Elogios
router.post("/compliments", ensureAuth, createComplimentController.handle);
router.get("/receivedcompliments", ensureAuth, listReceivedComplimentsByUserController.handle);
router.get("/sentcompliments", ensureAuth, listSentComplimentsByUserController.handle);

export {router};