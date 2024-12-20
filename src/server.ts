import Express, { Request, Response, NextFunction } from "express";
import 'express-async-errors';
import cors from 'cors';
import router from "./router";

const app = Express();


app.use(Express.json());
app.use(cors()); 
app.use(router);


app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof Error) {
        return res.status(400).json({
            error: err.message
        });
    }
    return res.status(500).json({
        status: 'Erro',
        message: 'Erro interno do servidor'
    });
});
app.listen(3333,()=>console.log('servidor ON LINE'));
