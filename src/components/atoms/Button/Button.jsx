import { IonButton, IonIcon } from "@ionic/react";
import React from "react";

export default function Button({
  disabled = false,
  className,
  fill,
  shape,
  expand,
  size,
  icon,
  slot,
}) {
  return (
    <>
      {disabled && (
        <IonButton className={className + " "} disabled={disabled}>
          {icon && <IonIcon slot={slot} icon={icon}></IonIcon>}
          Disabled
        </IonButton>
      )}
      {!disabled && (
        <IonButton className={className}>
          {icon && <IonIcon slot={slot} icon={icon}></IonIcon>}
          Default
        </IonButton>
      )}
    </>
  );
}
