import {
  IonButton,
  IonDatetime,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonContent,
} from "@ionic/react";
import React from "react";

export default function Home() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>My Page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="bg-black text-white">Hello</div>
        <IonDatetime></IonDatetime>
        <IonButton fill="clear">Start</IonButton>
      </IonContent>
    </IonPage>
  );
}
