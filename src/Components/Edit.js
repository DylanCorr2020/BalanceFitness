import React from 'react';
import axios from 'axios';


export  class Edit extends React.Component
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

//when it comes active in the view
componentDidMount(){
   console.log(this.props.match.params.id);

   //read this record from the database
   axios.get('http://localhost:4000/api/profiles/' + this.props.match.params.id)
   .then((response)=>{
       this.setState({
       _id:response.data._id,
       Met:response.data.Met,
       Minutes: response.data.Minutes,
       Weight: response.data.Weight,
       Calories: response.data.Calories
       })
   })
   .catch((error)=>{
       console.log(error)
   });
}

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
    
     this.setState({Calories: parseInt(this.state.Met) + parseInt(this.state.Minutes)})
     
      

      const newProfile = {
        Met: this.state.Met,
        Minutes: this.state.Minutes,
        Weight: this.state.Weight,
        Calories: this.state.Calories,
        _id: this.state._id
      }


      axios.put('http://localhost:4000/api/profiles/' + this.state._id, newProfile)
      .then(res =>{
          console.log(res.data)
      })
      .catch()

    //   axios.post('http://localhost:4000/api/profiles',newProfile)
    //   .then((res) =>{
    //     console.log(res);
    //   })
    //   .catch((err)=>{
    //     console.log(err);
    //   });
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

         <input type = "submit" name = "" value = "Edit Profile"></input>

         <h4> Calories burnt: </h4>

        </form>
             

        </div>

    );
  }
}