import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import view from './component/Test.js';
import Welcome from "./pages/Welcome.js";
import Error from './component/NotFound.js';

function App(){

    return (
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Welcome}/>
              <Route exact path="/pokedex" component={view}/>
              <Route path="/404" component={Error} />
              <Redirect from="*" to="/404" />
            </Switch>      
              
          </BrowserRouter>
          
        
    );
}

export default App;