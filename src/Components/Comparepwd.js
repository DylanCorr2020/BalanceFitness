import React from 'react'

//import react from react library 


class Comparepwd extends React.Component
{
    
    //call constructor
    //add properties
    //one for input 
    //add message to show if passwords are correct or not
    constructor()
    {
        super();

        this.state={
            input:{},
            msg:{}
        }

        this.pwdConfrim = this.pwdConfrim.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }   

    //confirm the password
    //on chnage event 
    //compare the target name and value
    //then validate inputpwd
    pwdConfrim(e)
    {
        var inputpwd = this.state.input;
        
        //target name and value must be the same 
        inputpwd[e.target.name]= e.target.value;
        
        this.setState({
            inputpwd
        });

    }

    //validationn function 
    //checks are they are the same or not
    //

    validation()
    {
        var msg={};

        if(this.state.input["passwd"] != this.state.input["confirmpwd"])
        {
            msg["passwd"] = "Passwords dont match!";

        }
        else
        {
             msg["confirmpwd"] = "Passwords are okay!";
        }

        this.setState({
            msg:msg
        });
    }


    handleSubmit(e)
    {
          
        e.preventDefault();

        if(this.validation())
        {
            var input = {};

            input["passwd"] = "";
            input["confirmpwd"] = "";
        }
    }


    render()
    {
        return(
            <div>
                 

                <form  onSubmit = {this.handleSubmit} className = "Login">

                        <h1> Sign Up </h1>
                       
                       <div>
                           <input type = "password" 
                           name = "passwd" value={this.state.input.passwd}
                           onChange={this.pwdConfrim}
                           placeholder = "Please enter password"/>
                       </div>

                        <div>
                            
                           <input type = "password"  
                           name = "confirmpwd" value={this.state.input.confirmpwd}
                           onChange={this.pwdConfrim}
                           placeholder = "Please Confirm password"/>
                       </div>

                       <div> <h4> {this.state.msg.passwd} </h4></div>
                       <div> <h4> {this.state.msg.confirmpwd} </h4> </div>

                       <input type = "Submit"  value = "submit"></input>
                </form>

            </div>
        );
    }

}


export default Comparepwd;