import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SiteHeader from "./components/SiteHeader";
import Dashboard from "./pages/Dahboard";
import Home from "./pages/Home";
import PrivateRoute from "./components/PrivateRoute";
import "./App.css";

import { useAuth0 } from "./contexts/auth0-context";

const App = () => {
  const auth0 = useAuth0();
  // const {getToken} = useAuth0();

  // // console.log(auth0);

  // // if (auth0.isAuthenticated) {
  // //   return <AuthenticatedApp />;
  // // } else {
  // //   return <UnauthenticatedApp />;
  // // }
  // useEffect(() => {
  //   getUserData();
  // }, []);

  // async function getUserData() {
  //   const token = await getToken();

  //   const response = await fetch(`http://example.com/api`, {
  //     headers: {
  //       Authorization: `Bearer ${token}`
  //     }
  //   });

  //   const data = await response.json()

  //   // console.log(data);
  // }

  return (
    <Router>
      <div className="app">
        <SiteHeader />

        <Switch>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>

          <Route path="/" exact={true}>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
