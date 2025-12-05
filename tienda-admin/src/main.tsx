import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

/* IMPORTANTE: inicializa Ionic React */
import { setupIonicReact } from "@ionic/react";
setupIonicReact();

/* Importar estilos de Ionic */
import "@ionic/react/css/core.css";
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";
import "@ionic/react/css/display.css";

import "./theme/variables.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
