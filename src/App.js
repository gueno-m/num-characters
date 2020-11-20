import React from "react";

import Provider from './Provider';

import Message from './components/Message';
import Rendu from "./components/Rendu";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Menu from './Styles/StyleMenu.js';

export default function App() {

  return (
    <Provider>
      <div className="App">
        <Router>

          <Menu>
            <Link to="/message">Message</Link>
            <Link to="/rendu">Rendu</Link>        
          </Menu>
                
           <Switch>
              <Route path="/message" component={ Message }></Route>
              <Route path="/rendu" component={ Rendu }></Route>
            </Switch>
                    
        </Router>
      </div>
    </Provider>
  );
}