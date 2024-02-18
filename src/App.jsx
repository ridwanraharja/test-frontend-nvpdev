import { useState } from "react";
import { IonButton, IonDatetime, IonSplitPane } from "@ionic/react";
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

import { setupIonicReact } from "@ionic/react";
import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Route } from "react-router-dom";
import Menu from "./components/organisms/Menu";
import Home from "./pages/Home";
import Users from "./pages/Users";

setupIonicReact();

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <IonApp>
        <IonReactRouter>
          <IonRouterOutlet>
            <IonSplitPane contentId="main">
              <Menu />
              <IonRouterOutlet id="main">
                {/*
                We use IonRoute here to keep the tabs state intact,
                which makes transitions between tabs and non tab pages smooth
                */}
                {/* <Route path="/tabs" render={() => <MainTabs />} /> */}
                {/* <Route path="/account" component={Account} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/support" component={Support} />
            <Route path="/tutorial" component={Tutorial} /> */}
                {/* <Route
              path="/logout"
              render={() => {
                return (
                  <RedirectToLogin
                    setIsLoggedIn={setIsLoggedIn}
                    setUsername={setUsername}
                  />
                );
              }}
            />
            <Route path="/" component={HomeOrTutorial} exact /> */}
                <Route path="/" exact component={Home} />
                <Route path="/users" component={Users} />
              </IonRouterOutlet>
            </IonSplitPane>
            {/* <Route path="/about" exact component={About} /> */}
          </IonRouterOutlet>
        </IonReactRouter>
      </IonApp>
    </>
  );
}

export default App;
