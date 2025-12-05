import { IonList, IonItem, IonLabel, IonBadge, IonFab, IonFabButton, IonIcon } from "@ionic/react";
import { add } from "ionicons/icons";
import { useEffect, useState } from "react";
import { obtenerInventario, Producto } from "../data/inventario";
import IMASPage from "../components/IMASpage";

const Productos: React.FC = () => {
  const [productos, setProductos] = useState<Producto[]>([]);

  useEffect(() => {
    cargarProductos();
  }, []);

  async function cargarProductos() {
    const data = await obtenerInventario();
    setProductos(data);
  }

  return (
    <IMASPage title="Productos" back="/">
      <h2>Listado de productos</h2>

      {productos.length === 0 && (
        <p style={{ opacity: 0.7 }}>
          No hay productos aún. Usa (+) para agregar uno.
        </p>
      )}

      <IonList>
        {productos.map((p) => (
          <IonItem key={p.id} routerLink={`/producto/${p.id}`}>
        <IonLabel>
            <h2>{p.nombre}</h2>
            <p>{p.categoria} — ${p.precio.toFixed(2)}</p>
        </IonLabel>

        <IonBadge color={p.stock <= 5 ? "danger" : "success"}>
            {p.stock}
         </IonBadge>
        </IonItem>

        ))}
      </IonList>

      <IonFab vertical="bottom" horizontal="end" slot="fixed">
        <IonFabButton color="success" routerLink="/agregar_producto">
          <IonIcon icon={add} />
        </IonFabButton>
      </IonFab>
    </IMASPage>
  );
};

export default Productos;
