import { Request, Response } from "npm:express@4.18.2";
import { ejemploModel } from "../db/ejemplo.ts";


const deleteEjemplo = async (req: Request, res: Response) => {
  try {
    //coger los parametros requeridos -> req.params
    // await find one and delete

    res.status(200).send("");
  } catch (error) {
    res.status(404).send(error.message);
    return;
  }
};

export default deleteEjemplo;