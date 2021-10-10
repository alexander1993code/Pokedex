import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import view from './Component/Test.js';
import Home from "./pages/Home.jsx";
import Error from './Component/NotFound.js';

function App(){

    return (
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/pokedex" component={view}/>
              <Route path="/404" component={Error} />
              <Redirect from="*" to="/404" />
            </Switch>      
              
          </BrowserRouter>
          
        
    );
}

export default App;