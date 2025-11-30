import React from "react";
import { IonContent } from "@ionic/react";
import { useNavigate } from "react-router-dom";
import "../theme/dashboard.css";


const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <IonContent fullscreen className="imas-bg">
      <div className="imas-overlay">

        {/* HEADER PREMIUM */}
        <div className="dashboard-header">
          <div className="header-left">
            <div className="imas-logo-dot" />
            <span className="header-title">IMAS Shop</span>
          </div>

          <div className="header-right">
            <span className="header-pill">Panel General</span>

            <div className="user-pill">
              <div className="user-avatar">VS</div>
              <span className="user-role">Admin</span>
            </div>
          </div>
        </div>

        {/* CONTENIDO PRINCIPAL */}
        <div className="dashboard-container">
          <h1 className="dashboard-title">Panel General</h1>

          <div className="dashboard-subtitle">
            Visualiza el pulso de tu tienda inteligente.
          </div>

          {/* GRID 3x2 */}
          <div className="dashboard-grid">

            <div
              className="dash-card ventas"
              onClick={() => navigate("/ventas_dia")}
            >
              <div className="dash-content">Ventas del día</div>
            </div>

            <div
              className="dash-card productos"
              onClick={() => navigate("/productos")}
            >
              <div className="dash-content">Productos</div>
            </div>

            <div
              className="dash-card inventario"
              onClick={() => navigate("/inventario")}
            >
              <div className="dash-content">Inventario</div>
            </div>

            <div
              className="dash-card historial"
              onClick={() => navigate("/historial")}
            >
              <div className="dash-content">Historial</div>
            </div>

            <div
              className="dash-card estado"
              onClick={() => navigate("/estado")}
            >
              <div className="dash-content">Estado de la tienda</div>
            </div>

            <div
              className="dash-card configuracion"
              onClick={() => navigate("/configuracion")}
            >
              <div className="dash-content">Configuración</div>
            </div>

          </div>
        </div>
      </div>
    </IonContent>
  );
};

export default Dashboard;
