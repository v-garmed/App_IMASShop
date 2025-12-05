import { Preferences } from "@capacitor/preferences";

export interface Producto {
  id: string;
  nombre: string;
  categoria: string;
  precio: number;
  stock: number;
  imagen?: string;
}

const INVENTORY_KEY = "IMAS_INVENTORY";

// Obtener inventario
export async function obtenerInventario(): Promise<Producto[]> {
  const result = await Preferences.get({ key: INVENTORY_KEY });

  if (!result.value) return [];

  try {
    return JSON.parse(result.value) as Producto[];
  } catch {
    return [];
  }
}

// Guardar inventario
async function guardarInventario(inventario: Producto[]): Promise<void> {
  await Preferences.set({
    key: INVENTORY_KEY,
    value: JSON.stringify(inventario),
  });
}

// Agregar producto
export async function agregarProducto(producto: Producto): Promise<void> {
  const inventario = await obtenerInventario();
  inventario.push(producto);
  await guardarInventario(inventario);
}

// Editar producto
export async function editarProducto(producto: Producto): Promise<void> {
  const inventario = await obtenerInventario();
  const index = inventario.findIndex((p) => p.id === producto.id);
  if (index !== -1) {
    inventario[index] = producto;
    await guardarInventario(inventario);
  }
}

// Eliminar producto
export async function eliminarProducto(id: string): Promise<void> {
  const inventario = await obtenerInventario();
  const actualizado = inventario.filter((p) => p.id !== id);
  await guardarInventario(actualizado);
}

// Reducir stock (ventas)
export async function reducirStock(id: string, cantidad: number): Promise<void> {
  const inventario = await obtenerInventario();
  const index = inventario.findIndex((p) => p.id === id);

  if (index !== -1) {
    inventario[index].stock = Math.max(0, inventario[index].stock - cantidad);
    await guardarInventario(inventario);
  }
}
