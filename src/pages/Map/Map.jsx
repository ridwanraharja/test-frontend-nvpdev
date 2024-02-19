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
import MapView from "../../components/atoms/Map";

export default function Map() {
  return (
    <IonPage id="map-view">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Map</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent class="map-page">
        <MapView className={"h-full w-full"} />
      </IonContent>
    </IonPage>
  );
}
