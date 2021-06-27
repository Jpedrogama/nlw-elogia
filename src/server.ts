import "reflect-metadata";
import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import { router } from "./routes";
import "./typeorm";

const app = express();
app.use(express.json());
app.use(router);

//middleware para tratar erros
app.use((err: Error, request: Request, response: Response, next: NextFunction) => {

    if(err instanceof Error){
        return response.json({error: err.message}).status(400);
    }
    
    return response.json({status: "error", message: "Internal Server Error"}).status(500);

})

app.listen(process.env.PORT, () => console.log(`Servidor rodando na porta ${process.env.PORT}`));