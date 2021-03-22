import React from "react";
import './App.css';
import Navbar from "./components/Navbar.js";
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import { Home } from "./components/Pages/Home";
import { deals } from "./components/Pages/deals.js";
import { cart } from "./components/Pages/cart.js";

function App() {
  return(
  <>
      <Router>
        <Navbar />
        <div className ="pages">
          <Switch>
              <Route exact path ="/" component ={Home} />
              <Route path="/deals" component={deals} />
              <Route path="/cart" component={cart} />
          </Switch>
        </div>
      </Router>
  </>
  );
}

export default App;
