import Producto from "../models/ProductoModels.js";

const crearProducto = async( request,response) => {
try {
   Producto.create(request.body)
   response.json({
    menssage: "usuario creado correctamente"
   })  
} catch (error) {
    response.json ({
        message: `no se pudo registrar ${error}`
    })
}

};
const listarProductos =async () => {

};
const listarPrducto =async () => {

};
const editarProducto =async () => {

};
const eliminarProducto =async () => {

};
export {
  crearProducto,
  listarProductos,
  listarPrducto,
  editarProducto,
  eliminarProducto,
};
