import express from "express";
import { crearProducto } from "../controllers/ProductoController.js";

const productoRouter = express.Router();
productoRouter.post('/',crearProducto)

export default productoRouter;