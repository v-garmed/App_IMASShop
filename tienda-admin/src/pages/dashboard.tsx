import React from "react";
import { IonContent } from "@ionic/react";

const Dashboard: React.FC = () => {
  return (
    <IonContent fullscreen>
      <div className="dashboard-header">
    Bienvenido a su Sistema de Tienda Inteligente
  </div>

      <div className="dashboard-container">
        <h1 className="dashboard-title">Panel General</h1>

        <div className="dashboard-grid">

          <div className="dash-card ventas">
            <div className="dash-content">Ventas del día</div>
          </div>

          <div className="dash-card productos">
            <div className="dash-content">Productos</div>
          </div>

          <div className="dash-card inventario">
            <div className="dash-content">Inventario</div>
          </div>

          <div className="dash-card historial">
            <div className="dash-content">Historial</div>
          </div>

          <div className="dash-card estado">
            <div className="dash-content">Estado de la tienda</div>
          </div>

          <div className="dash-card configuracion">
            <div className="dash-content">Configuración</div>
          </div>

        </div>
      </div>
    </IonContent>
  );
};

export default Dashboard;
