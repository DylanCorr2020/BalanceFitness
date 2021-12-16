import React, { Component } from 'react';


export default class Home extends Component
{

  state = {
    divcontainer: false,
  }

 //show and hide a div element 
 //fist set div container to false 


 //when button click 
 //handle change is called
 //set its to true
//saves it into the const varaible x

render()
 {

    const x = this.state.divcontainer;

    var HandleChange = e => {
        this.setState({divcontainer:!this.state.divcontainer});
    } 
  
  return(
  <div>
    	     <center className = "about">
           <button onClick = {HandleChange}>{x?'Hide':'About'}</button>
           {
           
                x && <div> 
                    <h4>
                    Welcome to my Calorie Counter Website.To use this website
                    you first decide which MET you will use.
                   </h4>
                   
                       <p>
                         Walking = 3.3 
                       </p>
                       <p>
                       Moderate excercise = 4.0 
                       </p>
                     
                       <p>
                       Vigorous excercise = 8.0 
                       </p>
                    
                    <p>
                    Then you enter in how long your workout was in Minutes
                    and then enter in your weight in Kg.
                    </p>
                  
                </div>
           }
          

           </center>
  </div>

  
  
  );
  }
}