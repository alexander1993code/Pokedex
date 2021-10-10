import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import view from './Component/Test.js';
import Home from "./pages/Home.jsx";
import Error from './Component/NotFound.js';
import Pokemon from "./pages/Pokemon.jsx";
import Berries from "./pages/Berries.jsx";
import Battle from "./pages/Battle.jsx";

function App(){

    return (
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/pokedex" component={view}/>
              <Route exact path="/pokemon" component={Pokemon}/>
              <Route exact path="/berries" component={Berries}/>
              <Route exact path="/battle" component={Battle}/>
              <Route path="/404" component={Error} />
              <Redirect from="*" to="/404" />
            </Switch>      
              
          </BrowserRouter>
          
        
    );
}

export default App;