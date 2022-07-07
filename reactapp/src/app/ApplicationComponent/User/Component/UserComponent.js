import React, { Component, Fragment } from "react";
//import { connect } from "react-redux";

export default class UserComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            userName : props.user.userName,
            password : props.user.password,
            street : props.user.street,
            mobile : props.user.mobile,
        }
    }
    //set new state when typed into text box
    onTextChange = (evt)=>{
        let target = evt.target;
        let classList = target.classList;
        let value = target.value;
        
        console.log("classlist ", classList)


        if(classList.contains("username")){
            this.setState({
                userName : value
            })
        } else if(classList.contains("pass"))
        {
            this.setState({
                password : value
            })
        }else if(classList.contains("street")){
            this.setState({
                street : value
            })
        }else if (classList.contains("mobile") && value.length <= 11) {
            this.setState({
                mobile: value
            })    
        } 

        evt.preventDefault();
    }

    loginUser = ()=>{
        //alert("we are going to sign in below user - " +JSON.stringify(this.state))
        
        //this.props.addUser(this.state)

        //after press login button, the state is sent to usercontainer  
        this.props.signInServer(this.state);
    }

    render(){
       return(
        <Fragment>
                <h1>User Login Page</h1>
                <section className={"componentClass"}>
                <div className="form col-md-8">
                        <div className="col-md-12">
                            <b>User Name</b>
                            <input type="text" className="form-control col-md-6 username" value={this.state.userName} 
                                placeholder="User Name" onChange={this.onTextChange} maxLength={40}/>
                        </div>
                        <div className="col-md-12">
                            <b>Password</b>
                            <input type="password" className="form-control col-md-6 pass" value={this.state.password} 
                                placeholder="Password" onChange={this.onTextChange} maxLength={40}/>
                        </div>
                        <div className="col-md-12">
                        <b>Street </b>
                            <input type="text" className="form-control col-md-6 street" value={this.state.street} 
                                    placeholder="Street Name" onChange={this.onTextChange} />
                        </div>
                    
                        <div className="col-md-12">
                            <b>Mobile </b>
                            <input type="number" className="form-control col-md-6 mobile" value={this.state.mobile} 
                            placeholder="Mobile" maxLength="11"
                            onChange={this.onTextChange} />
                        </div>

                     {/* {this.props.user._id} */}

                     <input type="button" className={"btn btn-primary col-md-2 saveUser"} 
                            value={"SignIn-Up"} 
                            onClick={this.loginUser}/>
                </div>

                </section>
            </Fragment>
        )
    }
}



// let mapStateToProps = (state)=>{
//     return{
//         user : state.userReducer.user
//     }
// }

// export default connect(mapStateToProps)(UserComponent);