import {Request, Resonse} from "npm:express@4.18.2";
import { ejemploModel } from "../db/ejemplo.ts";

const addEjemplo = async (req: Request, res: Resonse) => {
    try{
        //coger el body req.body
        //comprobar q no falten ninguno de los necesarios
        //crear lo nuevo 
        //await (lo creado).save();

    }catch(error){
        res.status(500).send(error.message)
        return;
    }
}

export default addEjemplo;