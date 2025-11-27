import { inventarioMock } from "../data/inventarioMock";

export const inventarioService = {
  getInventario: async () => {
    return inventarioMock;
  }
};
