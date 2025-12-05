import {
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonList,
  IonSelect,
  IonSelectOption,
  IonToast
} from "@ionic/react";

import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Producto, obtenerInventario, editarProducto, eliminarProducto } from "../data/inventario";
import IMASPage from "../components/IMASpage";

const EditarProducto: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [producto, setProducto] = useState<Producto | null>(null);
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    cargarProducto();
  }, []);

  async function cargarProducto() {
    const inventario = await obtenerInventario();
    const encontrado = inventario.find((p) => p.id === id);
    setProducto(encontrado || null);
  }

  async function guardarCambios() {
    if (!producto) return;

    await editarProducto(producto);
    setMensaje("Producto actualizado.");
  }

  async function borrarProducto() {
    if (!producto) return;

    const confirmacion = confirm("¿Eliminar este producto?");
    if (!confirmacion) return;

    await eliminarProducto(producto.id);
    navigate("/productos"); // Regresar a lista
  }

  if (!producto) {
    return (
      <IMASPage title="Producto" back="/productos">
        <p>Cargando datos...</p>
      </IMASPage>
    );
  }

  return (
    <IMASPage title="Editar Producto" back="/productos">
      <h2>{producto.nombre}</h2>

      <IonList>

        <IonItem>
          <IonLabel position="stacked">Nombre</IonLabel>
          <IonInput
            value={producto.nombre}
            onIonInput={(e: any) =>
              setProducto({ ...producto, nombre: e.target.value })
            }
          />
        </IonItem>

        <IonItem>
          <IonLabel position="stacked">Categoría</IonLabel>
          <IonSelect
            value={producto.categoria}
            onIonChange={(e) =>
              setProducto({ ...producto, categoria: e.detail.value })
            }
          >
            <IonSelectOption value="Abarrotes">Abarrotes</IonSelectOption>
            <IonSelectOption value="Bebidas">Bebidas</IonSelectOption>
            <IonSelectOption value="Lácteos">Lácteos</IonSelectOption>
            <IonSelectOption value="Botanas">Botanas</IonSelectOption>
            <IonSelectOption value="Dulces">Dulces</IonSelectOption>
          </IonSelect>
        </IonItem>

        <IonItem>
          <IonLabel position="stacked">Precio</IonLabel>
          <IonInput
            type="number"
            value={producto.precio}
            onIonInput={(e: any) =>
              setProducto({ ...producto, precio: parseFloat(e.target.value) })
            }
          />
        </IonItem>

        <IonItem>
          <IonLabel position="stacked">Stock</IonLabel>
          <IonInput
            type="number"
            value={producto.stock}
            onIonInput={(e: any) =>
              setProducto({ ...producto, stock: parseInt(e.target.value) })
            }
          />
        </IonItem>

      </IonList>

      <IonButton expand="block" color="primary" onClick={guardarCambios}>
        Guardar cambios
      </IonButton>

      <IonButton expand="block" color="danger" onClick={borrarProducto}>
        Eliminar producto
      </IonButton>

      <IonToast
        isOpen={mensaje !== ""}
        message={mensaje}
        duration={1800}
        onDidDismiss={() => setMensaje("")}
      />
    </IMASPage>
  );
};

export default EditarProducto;
