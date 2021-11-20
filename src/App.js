import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Error from './Component/NotFound.js';
import Pokemon from "./pages/Pokemon.jsx";
import Berries from "./pages/Berries.jsx";
import Battle from "./pages/Battle.jsx";
import AppContext from "./context/AppContext.js";
import useInitialState from "./hooks/useInitialState.js";
import Layout from "./layout/Layout.jsx";

function App() {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/pokemon" component={Pokemon} />
            <Route exact path="/berries" component={Berries} />
            <Route exact path="/battle" component={Battle} />
            <Route path="/404" component={Error} />
            <Redirect from="*" to="/404" />
          </Switch>
        </Layout>

      </BrowserRouter>
    </AppContext.Provider>


  );
}

export default App;