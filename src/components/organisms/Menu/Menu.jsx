import React from "react";
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuButton,
  IonMenuToggle,
  IonPage,
  IonTitle,
  IonToggle,
  IonToolbar,
} from "@ionic/react";
import {
  calendarOutline,
  hammer,
  moonOutline,
  help,
  informationCircleOutline,
  logIn,
  logOut,
  mapOutline,
  peopleOutline,
  person,
  personAdd,
  home,
} from "ionicons/icons";

export default function Menu() {
  const routes = {
    appPages: [
      { title: "Home", path: "/", icon: home },
      { title: "Users", path: "/users", icon: peopleOutline },
      { title: "Map", path: "/tabs/map", icon: mapOutline },
      { title: "About", path: "/tabs/about", icon: informationCircleOutline },
    ],
  };

  function renderlistItems(list) {
    return list
      .filter((route) => !!route.path)
      .map((p) => (
        <IonMenuToggle key={p.title} auto-hide="false">
          <IonItem
            detail={false}
            routerLink={p.path}
            routerDirection="none"
            className={
              location.pathname.startsWith(p.path) ? "selected" : undefined
            }
          >
            <IonIcon slot="start" icon={p.icon} />
            <IonLabel>{p.title}</IonLabel>
          </IonItem>
        </IonMenuToggle>
      ));
  }
  return (
    <IonMenu type="overlay" contentId="main">
      <IonContent forceOverscroll={false}>
        <IonList lines="none">
          <IonListHeader>Conference</IonListHeader>
          {renderlistItems(routes.appPages)}
        </IonList>
        <IonList lines="none">
          <IonListHeader>Account</IonListHeader>
          {/* {isAuthenticated
            ? renderlistItems(routes.loggedInPages)
            : renderlistItems(routes.loggedOutPages)} */}
          <IonItem>
            <IonIcon
              slot="start"
              icon={moonOutline}
              aria-hidden="true"
            ></IonIcon>
            {/* <IonToggle
            checked={darkMode}
            onClick={() => setDarkMode(!darkMode)}
          >
            Dark Mode
          </IonToggle> */}
          </IonItem>
        </IonList>
        {/* <IonList lines="none">
        <IonListHeader>Tutorial</IonListHeader>
        <IonItem
          button
          onClick={() => {
            history.push('/tutorial');
          }}
        >
          <IonIcon slot="start" icon={hammer} />
          <IonLabel>Show Tutorial</IonLabel>
        </IonItem>
      </IonList> */}
      </IonContent>
    </IonMenu>
  );
}
