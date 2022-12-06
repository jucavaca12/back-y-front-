import Producto from "../models/ProductoModels.js";

const crearProducto = async (request, response) => {
  try {
    await Producto.create(request.body);
    response.json({
      menssage: `Usuario creado correctamente`,
    });
  } catch (error) {
    response.json({
      message: `No se pudo registrar ${error}`,
    });
  }
};

const CrearProducto = async (request, response) => {

};

const listarProductos = async (request, response) => {

};


const listarPrducto = async (request, response) => {

};


const editarProducto = async (request, response) => {

};


const eliminarProducto = async (request, response) => {

};



export {
  crearProducto,
  listarProductos,
  listarPrducto,
  editarProducto,
  eliminarProducto,
};
