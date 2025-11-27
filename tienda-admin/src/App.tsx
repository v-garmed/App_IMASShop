import React from "react";
import "./theme/global.css";

import { IonApp } from "@ionic/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "@ionic/react/css/core.css";
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

import "./theme/variables.css";
import "./theme/dashboard.css";

import Dashboard from "./pages/dashboard";

const App: React.FC = () => {
  return (
    <IonApp>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </IonApp>
  );
};

export default App;
