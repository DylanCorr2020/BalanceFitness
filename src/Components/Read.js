import React, { Component } from 'react';
import Profiles from './profiles';
import axios from 'axios';


export default class Read extends Component
{

  constructor(){

    super();

    this.ReloadData = this.ReloadData.bind(this);


  }
  

//store in data that we can we use
state = {
    profiles: []
}
 componentDidMount(){
     axios.get('http://localhost:4000/api/profiles')
     .then((response)=>{
      this.setState({profiles: response.data})
    })   
    .catch((error) => {
          console.log(error)
     });
    }


   ReloadData(){

      axios.get('http://localhost:4000/api/profiles')
     .then((response)=>{
      this.setState({profiles: response.data})
    })   
    .catch((error) => {
          console.log(error)
     });

   }


render()
  {
  return(
  <div className = "hello">
    

        <Profiles yourProfile = {this.state.profiles} ReloadData = {this.ReloadData}> </Profiles>

       
 </div>

  
  
  );
  }
}