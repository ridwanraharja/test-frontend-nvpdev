import React from "react";

import { IonCol, IonTitle } from "@ionic/react";
export default function Items({ children, title, sizeMd = null, size = "12" }) {
  return (
    <IonCol
      size={size}
      size-md={sizeMd}
      className="flex flex-col items-center md:block w-full mt-5"
    >
      <IonTitle>{title}</IonTitle>
      {children}
    </IonCol>
  );
}
