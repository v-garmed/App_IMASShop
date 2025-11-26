import { ventasService } from "../services/ventasService";

export default function Dashboard() {

  const [ventasDia, setVentasDia] = useState(null);

  useEffect(() => {
    ventasService.getVentasDia().then(data => setVentasDia(data));
  }, []);

  return (
    <IonContent>
      <div className="dashboard-container">

        <h1 className="dashboard-title">Mi Tienda</h1>

        <div className="dashboard-grid">

          <div className="dash-card" onClick={() => go("/ventas-dia")}>
            <div className="dash-icon">📊</div>
            <div className="dash-label">Ventas del día</div>
            <div className="dash-value">${ventasDia?.total}</div>
          </div>

          <div className="dash-card" onClick={() => go("/historial")}>
            <div className="dash-icon">🧾</div>
            <div className="dash-label">Historial de ventas</div>
          </div>

          <div className="dash-card" onClick={() => go("/inventario")}>
            <div className="dash-icon">📦</div>
            <div className="dash-label">Inventario</div>
          </div>

          <div className="dash-card" onClick={() => go("/productos")}>
            <div className="dash-icon">🛒</div>
            <div className="dash-label">Productos</div>
          </div>

          <div className="dash-card" onClick={() => go("/estado")}>
            <div className="dash-icon">🏪</div>
            <div className="dash-label">Estado de la tienda</div>
          </div>

          <div className="dash-card" onClick={() => go("/configuracion")}>
            <div className="dash-icon">⚙️</div>
            <div className="dash-label">Configuración</div>
          </div>

        </div>
      </div>
    </IonContent>
  );
}
