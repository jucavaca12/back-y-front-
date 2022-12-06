import express from "express";
import dataBase from "./database/DatabaseSQL.js";
import productoRouter from "./routes/ProductoRoutes.js";


const app = express();
const por = 3100;

app.use('/producto', productoRouter)

try {
 await dataBase.authenticate();
  console.log('coneccion exitosa')
} catch (error) {
  console.log(`conexion no exitosa: $(error)`);
}

app.listen(3100, () => {
console.log("servidor corriendo en el puerto  3100")
console.log("'http://localhost:3100")

})