import React from 'react';
import axios from 'axios';


export  class Create extends React.Component
{

constructor(){

  super();

  //bind events
  this.onSubmit = this.onSubmit.bind(this);
  this.onChangeMet = this.onChangeMet.bind(this);
  this.onChangeMinutes = this.onChangeMinutes.bind(this);
  this.onChangeWeight = this.onChangeWeight.bind(this);
 
 
 
  

  this.state = {
    Met: '',
    Minutes: '',
    Weight: '',
    Calories: 0
  }
} //end constructor

onChangeMet(e) {
this.setState({
    Met: e.target.value  
   });
}

onChangeMinutes(e) {
  this.setState({
    Minutes: e.target.value
  })
}

onChangeWeight(e){
   this.setState({
    Weight: e.target.value
  })
}





 



//method
    onSubmit(e){  
    e.preventDefault();

    

   

       this.setState((state, props)=>({
         Calories: parseInt(state.Met) + parseInt(state.Minutes)
       }));


        const newProfile = {
        Met: this.state.Met,
        Minutes: this.state.Minutes,
        Weight: this.state.Weight,
        Calories: this.state.Calories
      }

      alert(this.state.Calories);


      axios.post('http://localhost:4000/api/profiles',newProfile)
      .then((res) =>{
        console.log(res);
      })
      .catch((err)=>{
        console.log(err);
      });
    }
      
     //alert("Movie" + this.state.Met + "Calories" + parseInt(this.state.Calories));
       
     //console.log(this.state.Calories);
     
   

   


render()
  {
  return(

    	<div>

        <form className = "box"  onSubmit = {this.onSubmit}>
          
        <h1>Calories</h1>

         <input type = "text" placeholder = "Please Enter MET" value={this.state.Met} onChange={this.onChangeMet}></input>
        
         <input type = "text" name = "" placeholder = "Please Enter Minutes" value = {this.state.Minutes} onChange = {this.onChangeMinutes}></input>

         <input type = "text" name = "" placeholder = "Please Enter Wight kg" value = {this.state.Weight} onChange = {this.onChangeWeight}></input>

    

         <input type = "submit" name = "" value = "Submit"></input>

         <h4> Calories burnt: </h4>

        </form>

       
             

        </div>

    );
  }
}