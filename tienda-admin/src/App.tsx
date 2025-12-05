import { IonApp } from "@ionic/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/dashboard";
import Productos from "./pages/productos";
import AgregarProducto from "./pages/agregar_producto";
import EditarProducto from "./pages/editar_producto";
import Inventario from "./pages/inventario";
import VentasDia from "./pages/ventas_dia";
import Historial from "./pages/historial";
import Estado from "./pages/estado";
import Configuracion from "./pages/configuracion";

import "./theme/variables.css";

function App() {
  return (
    <IonApp>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Dashboard />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/agregar_producto" element={<AgregarProducto />} />
          <Route path="/producto/:id" element={<EditarProducto />} />
          <Route path="/inventario" element={<Inventario />} />
          <Route path="/ventas_dia" element={<VentasDia />} />
          <Route path="/historial" element={<Historial />} />
          <Route path="/estado" element={<Estado />} />
          <Route path="/configuracion" element={<Configuracion />} />

        </Routes>
      </BrowserRouter>
    </IonApp>
  );
}

export default App;
