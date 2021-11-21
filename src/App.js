import React from "react";
import "./style.css";
import Header from "./Header";

import TinderCards from 'react-tinder-card';
import TinderCards from "./TinderCards";
import {  BrowserRouter as Router,  Switch,  Route,  Link} from "react-router-dom";

export default function App() {
  
  return (
    <div className="App">
      {/* Header */}
      
      <Router>
        <Switch>
          <Route path="/Chat">
            <h1> im home chat page</h1>
          </Route>
          <Route path="/">
              <Header />
              <TinderCards /> 
          </Route>
        </Switch>
      </Router>
    </div>
  );
}


export default App;


        {/* Tinder Cards // <TinderCard />  */}

      {/* Button below tinder card  */}

      {/* Chats Screen */}

      {/* Individual chat screen */}