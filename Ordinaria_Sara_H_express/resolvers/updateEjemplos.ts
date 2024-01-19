import { Request, Response } from "npm:express@4.18.2";
import { ejemploModel } from "../db/ejemplo.ts";

const updateEjemplo = async (req: Request, res: Response) => {

    try{
        //coger los parametros que se necesiten --> req.params
       // find one and update {id}{update}

        res.status(200).send();

    }catch(error){
        res.send(400).send(error)
        return error;
    }
    
}

export default updateEjemplo;