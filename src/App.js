import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Read from './Components/Read';

import Home from './Components/Home';
import { Create } from './Components/Create';
import { Edit } from './Components/Edit';
import Comparepwd from './Components/Comparepwd';







class App extends Component{

  render()
  {
  return (
    
        <Router>
            

      
       
         <div className = "navbar">

           <h1> Balance Fitness </h1>

          <ul>
              <li><a href="/">Home</a> </li>
              <li><a href="/create">Calculate</a> </li>
              <li><a href="/read">Profile </a> </li>
             
          </ul>

           
           <div className = "workout">
           <a href="/workout">Workout</a>
           </div>


          <Switch>
           <Route path = "/" component = {Home} exact/>
          <Route path = "/read" component = {Read} exact/>
          <Route path = "/create" component = {Create} exact/>
          <Route path = "/edit/:id" component = {Edit} exact/>
          <Route path = "/workout" component = {Comparepwd} exact/>
          
          </Switch>

          
        
          
          
        </div>
      
        </Router>

       
        
    
   );
  }
}

export default App;
