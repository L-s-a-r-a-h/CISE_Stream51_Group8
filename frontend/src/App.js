
import './App.css';
import React from "react";
import {
  Route,
  NavLink,
  //BrowserRouter as Router,
  HashRouter as Router,
  Navigate,
} from "react-router-dom";

import ArticleSummary from './pages/ArticleSummary';

const App = () =>  {
  return (
      <Router>
      <div>
        <h1>Software Engineering Empirical Evidence Database (SEED)</h1>
          <ul className="header">
          <li><NavLink exact to = "/">ArticleSummary</NavLink></li>
              <li><NavLink to = "/ArticleSummary">Select the Practice</NavLink></li>
             
          </ul>
        <div className="content">

            <Route exact path="/" element={<ArticleSummary/>}/>
            <Route  path="/ArticleSummary" element={<ArticleSummary/>}/>
            


        </div>
      </div>
      </Router>
  );
}

export default App;
