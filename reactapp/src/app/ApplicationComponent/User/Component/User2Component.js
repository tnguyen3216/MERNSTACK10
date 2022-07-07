import React from 'react'


export default class User2Component extends Component{

    constructor(props){
        super(props);
        this.state = {
            username: props.user.username,
            password: props.user.password,
    

        }
    }
    
    
        onTextChange = (evt)=>{
            let target = evt.target;
            let classList = target.classList;
            let value = target.value;
    
    
            if(classList.contains("username")){
                this.setState({
                    userName : value
                })
            } else if(classList.contains("pass"))
            {
                this.setState({
                    password : value
                })
           
            } 
    
            evt.preventDefault();
        }
    
        loginUser = ()=>{
            alert("we are going to sign in below user - " +JSON.stringify(this.state))
           
            //state is sen to usercontainer 
            this.props.signInServer(this.state);
        
        }
    
        render(){
           return(
            <div>
                    <h1>User Login Page</h1>
                    <section className={"componentClass"}>
                    <div className="form col-md-8">
                            <div className="col-md-12">
                                <b>User Name</b>
                                <input type="text"  className="form-control col-md-6 username" value={this.state.userName} 
                                    placeholder="User Name" onChange={this.onTextChange} maxLength={40}/>
                            </div>
                            <div className="col-md-12">
                                <b>Password</b>
                                <input type="password" className="form-control col-md-6 pass" value={this.state.password} 
                                    placeholder="Password" onChange={this.onTextChange} maxLength={40}/>
                            </div>
                        
    
                         <input type="button"  value={"SignIn-Up"} onClick={this.loginUser}/>
                    </div>
    
                    </section>
                </div>
            )
        }
    }
