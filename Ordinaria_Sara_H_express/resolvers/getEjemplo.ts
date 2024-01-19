import {Request, Resonse} from "npm:express@4.18.2";
import { ejemploModel } from "../db/ejemplo.ts";

const getEjemplo = async ( req: Request, res: Resonse ) => {
    try{
        //req.params si se necesita
        //await .find() // find {_id: id}
        //devolver elementos en el .send()
        
        res.status(200).send();

    }catch(error){
        res.status(404).send(error.message)
        return;
    }
}

export default getEjemplo;