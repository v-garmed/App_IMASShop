import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonButton,
  IonTitle,
  IonContent,
  IonIcon,
} from "@ionic/react";

import { chevronBackOutline } from "ionicons/icons";
import React from "react";
import "../theme/imaspage.css"; // Nuevo CSS

interface IMASPageProps {
  title: string;
  back?: string;
  children: React.ReactNode;
}

const IMASPage: React.FC<IMASPageProps> = ({ title, back, children }) => {
  return (
    <IonPage>

      {/* ENCABEZADO */}
      <IonHeader>
        <IonToolbar className="imas-header">
          {back && (
            <IonButtons slot="start">
              <IonButton routerLink={back} routerDirection="back" className="imas-back-btn">
                <IonIcon icon={chevronBackOutline} slot="icon-only" />
              </IonButton>
            </IonButtons>
          )}
          <IonTitle className="imas-header-title">{title}</IonTitle>
        </IonToolbar>
      </IonHeader>

      {/* CONTENIDO CON TARJETA CENTRAL */}
      <IonContent fullscreen className="imas-bg">
        <div className="imas-card-container">
          <div className="imas-card animate-card">
            {children}
          </div>
        </div>
      </IonContent>

    </IonPage>
  );
};

export default IMASPage;
