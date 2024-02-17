import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { IonButton, IonDatetime } from "@ionic/react";
import "./App.css";
import "@ionic/react/css/core.css";

// /* Basic CSS for apps built with Ionic */
// import "@ionic/react/css/normalize.css";
// import "@ionic/react/css/structure.css";
// import "@ionic/react/css/typography.css";

// /* Optional CSS utils that can be commented out */
// import "@ionic/react/css/padding.css";
// import "@ionic/react/css/float-elements.css";
// import "@ionic/react/css/text-alignment.css";
// import "@ionic/react/css/text-transformation.css";
// import "@ionic/react/css/flex-utils.css";
// import "@ionic/react/css/display.css";

import { setupIonicReact } from "@ionic/react";
import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Route } from "react-router-dom";
import Home from "./Pages/Home";

setupIonicReact();

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <IonApp>
        <IonReactRouter>
          <IonRouterOutlet>
            <Route path="/" exact component={Home} />
            {/* <Route path="/about" exact component={About} /> */}
          </IonRouterOutlet>
        </IonReactRouter>
      </IonApp>
    </>
  );
}

export default App;
