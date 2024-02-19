import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonToggle,
} from "@ionic/react";
import {
  informationCircleOutline,
  mapOutline,
  peopleOutline,
  home,
} from "ionicons/icons";

import {
  selectDarkMode,
  toggleDarkMode,
} from "../../../redux/features/slices/theme/themeSlice";

export default function Menu() {
  const isDarkMode = useSelector(selectDarkMode);
  const dispatch = useDispatch();

  const routes = {
    appPages: [
      { title: "Home", path: "/", icon: home },
      { title: "Users", path: "/users", icon: peopleOutline },
      { title: "Map", path: "/map", icon: mapOutline },
      { title: "About", path: "/about", icon: informationCircleOutline },
    ],
  };

  useEffect(() => {
    // Use matchMedia to check the user preference
    const prefersDark = window.matchMedia(false);

    // Initialize the dark theme based on the initial
    // value of the prefers-color-scheme media query
    initializeDarkTheme(prefersDark.matches);

    // Listen for changes to the prefers-color-scheme media query
    prefersDark.addEventListener("change", (mediaQuery) =>
      initializeDarkTheme(mediaQuery.matches)
    );
  }, []);

  const toggleChange = (ev) => {
    toggleDarkTheme(ev.detail.checked);
  };

  // Add or remove the "dark" class on the document body
  const toggleDarkTheme = (shouldAdd) => {
    document.body.classList.toggle("dark", shouldAdd);
  };

  // Check/uncheck the toggle and update the theme based on isDark
  const initializeDarkTheme = (isDark) => {
    dispatch(toggleDarkMode(isDark));
    toggleDarkTheme(isDark);
  };

  /**
   * Render menu items based on the provided list
   * @param {Array} list - The list of menu items to render
   * @returns {Array} - The array of rendered menu items
   */
  const renderlistItems = (list) => {
    // Filter out menu items with no path
    return (
      list
        .filter((route) => !!route.path)
        // Map each menu item to JSX
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
        ))
    );
  };
  return (
    <IonMenu type="overlay" contentId="main">
      <IonContent forceOverscroll={false}>
        <IonList lines="none">
          <IonListHeader>Simple Dashboard</IonListHeader>
          {renderlistItems(routes.appPages)}
        </IonList>
        <IonList lines="none">
          <IonItem>
            <IonToggle
              checked={isDarkMode}
              onIonChange={toggleChange}
              justify="space-between"
            >
              Dark Mode
            </IonToggle>
          </IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
  );
}
