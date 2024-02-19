import { IonSplitPane } from "@ionic/react";
import { setupIonicReact } from "@ionic/react";
import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Route } from "react-router-dom";
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";
import "./theme/variables.css";

import Menu from "./components/organisms/Menu";
import Home from "./pages/Home";
import Users from "./pages/Users";
import About from "./pages/About";
import Map from "./pages/Map";

setupIonicReact();

function App() {
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <IonSplitPane contentId="main">
            <Menu />
            <IonRouterOutlet id="main">
              <Route path="/" exact component={Home} />
              <Route path="/users" component={Users} />
              <Route path="/map" exact component={Map} />
              <Route path="/about" component={About} />
            </IonRouterOutlet>
          </IonSplitPane>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
}

export default App;
