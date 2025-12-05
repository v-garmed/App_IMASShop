import {
  IonPage,
  IonContent,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonTitle,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonList,
  IonSelect,
  IonSelectOption,
  IonToast,
} from "@ionic/react";

import { useState } from "react";
import { agregarProducto, Producto } from "../data/inventario";
import { generarId } from "../utils/id";
import IMASPage from "../components/IMASpage";

const AgregarProducto: React.FC = () => {
  const [nombre, setNombre] = useState("");
  const [categoria, setCategoria] = useState("");
  const [precio, setPrecio] = useState<number | undefined>();
  const [stock, setStock] = useState<number | undefined>();
  const [mensaje, setMensaje] = useState("");

  async function guardar() {
    if (!nombre || !categoria || precio === undefined || stock === undefined) {
      setMensaje("Por favor completa todos los campos.");
      return;
    }

    const producto: Producto = {
      id: generarId(),
      nombre,
      categoria,
      precio,
      stock,
    };

    await agregarProducto(producto);

    setMensaje("Producto agregado correctamente.");
    setNombre("");
    setCategoria("");
    setPrecio(undefined);
    setStock(undefined);
  }

  return (
    <IMASPage title="Agregar Producto" back="/productos">
      <IonList>

        <IonItem>
          <IonLabel position="stacked">Nombre del producto</IonLabel>
          <IonInput
            value={nombre}
            onIonInput={(e: any) => setNombre(e.target.value)}
            placeholder="Ej. Galletas Oreo"
          />
        </IonItem>

        <IonItem>
          <IonLabel position="stacked">Categoría</IonLabel>
          <IonSelect
            value={categoria}
            placeholder="Seleccionar categoría"
            onIonChange={(e) => setCategoria(e.detail.value)}
          >
            <IonSelectOption value="Abarrotes">Abarrotes</IonSelectOption>
            <IonSelectOption value="Bebidas">Bebidas</IonSelectOption>
            <IonSelectOption value="Lácteos">Lácteos</IonSelectOption>
            <IonSelectOption value="Botanas">Botanas</IonSelectOption>
            <IonSelectOption value="Dulces">Dulces</IonSelectOption>
          </IonSelect>
        </IonItem>

        <IonItem>
          <IonLabel position="stacked">Precio (MXN)</IonLabel>
          <IonInput
            type="number"
            value={precio}
            placeholder="Ej. 25"
            onIonInput={(e: any) => setPrecio(parseFloat(e.target.value))}
          />
        </IonItem>

        <IonItem>
          <IonLabel position="stacked">Stock inicial</IonLabel>
          <IonInput
            type="number"
            value={stock}
            placeholder="Ej. 12"
            onIonInput={(e: any) => setStock(parseInt(e.target.value))}
          />
        </IonItem>

      </IonList>

      <IonButton expand="block" color="success" onClick={guardar} style={{ marginTop: "20px" }}>
        Guardar Producto
      </IonButton>

      <IonToast
        isOpen={mensaje !== ""}
        message={mensaje}
        duration={1500}
        onDidDismiss={() => setMensaje("")}
      />
    </IMASPage>
  );
};

export default AgregarProducto;
