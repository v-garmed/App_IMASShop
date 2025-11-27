import { ventasDiaMock, ventasHistorialMock } from "../data/ventasMock";

export const ventasService = {
  getVentasDia: async () => {
    return ventasDiaMock;
  },

  getHistorial: async () => {
    return ventasHistorialMock;
  }
};
