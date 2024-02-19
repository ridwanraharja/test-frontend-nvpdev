import React from "react";
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

export default function About() {
  return (
    <IonPage id="map-view">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>About</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent class="map-page">
        <div>Coming Soon</div>
      </IonContent>
    </IonPage>
  );
}
