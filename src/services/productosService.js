import { productosMock } from "../data/productosMock";

export const productosService = {
  getProductos: async () => productosMock,
  agregarProducto: async (producto) => {
    productosMock.push(producto);
    return producto;
  },
  eliminarProducto: async (codigo) => {
    const index = productosMock.findIndex(p => p.codigo === codigo);
    if (index !== -1) productosMock.splice(index, 1);
  },
  actualizarProducto: async (producto) => {
    const index = productosMock.findIndex(p => p.codigo === producto.codigo);
    if (index !== -1) productosMock[index] = producto;
  }
};
