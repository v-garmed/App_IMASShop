import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonTitle,
  IonContent,
} from "@ionic/react";

import React from "react";
import "../theme/dashboard.css";

interface IMASPageProps {
  title: string;
  back?: string; // ruta para regresar, opcional
  children: React.ReactNode;
}

const IMASPage: React.FC<IMASPageProps> = ({ title, back, children }) => {
  return (
    <IonPage>
      {/* HEADER */}
      <IonHeader>
        <IonToolbar color="light">
          {back && (
            <IonButtons slot="start">
              <IonBackButton defaultHref={back} text="Regresar" />
            </IonButtons>
          )}
          <IonTitle>{title}</IonTitle>
        </IonToolbar>
      </IonHeader>

      {/* CONTENIDO */}
      <IonContent fullscreen className="imas-bg">
        <div className="imas-overlay internal-page">
          {children}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default IMASPage;
