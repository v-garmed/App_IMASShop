import React from "react";
import { IonContent } from "@ionic/react";

const Dashboard: React.FC = () => {
  return (
    <IonContent fullscreen>
      <div className="dashboard-container">
        <h1 className="dashboard-title">Mi Tienda</h1>

        <div className="dashboard-grid">
          <div className="dash-card">📊 Ventas del día</div>
          <div className="dash-card">🧾 Historial</div>
          <div className="dash-card">📦 Inventario</div>
          <div className="dash-card">🛒 Productos</div>
          <div className="dash-card">🏪 Estado</div>
          <div className="dash-card">⚙️ Configuración</div>
        </div>
      </div>
    </IonContent>
  );
};

export default Dashboard;
