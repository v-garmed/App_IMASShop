import React from "react";
import { IonApp } from "@ionic/react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Dashboard from "./pages/dashboard";

import "./theme/dashboard.css";

const App: React.FC = () => {
  return (
    <IonApp>
      <Router>
        <Switch>
          <Route exact path="/" component={Dashboard} />
        </Switch>
      </Router>
    </IonApp>
  );
};

export default App;
