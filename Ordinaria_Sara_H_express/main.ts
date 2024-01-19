import mongoose from "npm:mongoose@8.0.0";
import express from "npm:express@4.18.2";

import { load } from "https://deno.land/std@0.204.0/dotenv/mod.ts";
const env = await load();

const MONGO_URL = env.MONGO_URL || Deno.env.get("MONGO_URL");

if(!MONGO_URL) {
  console.log("No Mongo URL found");
  Deno.exit(1);
}

try{
  await mongoose.connect(MONGO_URL);
  console.log("Conectado a mongo");
}catch(error){
  console.log(error.message);
}

//con express
const app = express();
app.use(express.json());

app
  /*.get("/get/coches", getCoches)
  .post("/post/addCoche", addCoche)
  .delete("/delete/deleteCoche", deleteCoche)
  .put("/update/ponerEnVenta", ponerEnVenta)*/

  app.listen(3000, () => {
    console.log("Server listening on port 3000");
  });




