import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';


export default class ProfileItem extends Component
{


  constructor(){
    super();

    this.DeleteProfile = this.DeleteProfile.bind(this);
  }

DeleteProfile(e){


  e.preventDefault();
  console.log("Delete" + this.props.profile._id);

  axios.delete('http://localhost:4000/api/profiles/' + this.props.profile._id)
  .then(()=>{
    this.props.ReloadData();
  })
  .catch();
}



render()
  {
  return(
  <div className = "results">
    	
   <h3> Results </h3>

   <h4>{this.props.profile.Met}</h4>
   <h4>{this.props.profile.Minutes}</h4>
   <h4>{this.props.profile.Weight}</h4>
   <h4>{this.props.profile.Calories}</h4>


   <Link to = {"/edit/"+ this.props.profile._id}>Edit</Link>

   <button onClick = {this.DeleteProfile}>Delete</button>

 </div>

  
  
  );
  }
}