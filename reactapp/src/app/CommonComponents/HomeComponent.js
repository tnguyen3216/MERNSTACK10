import React, {Component, PureComponent} from "react";
import {PropTypes} from "prop-types";

//export default class Home extends Component {
export default class Home extends PureComponent {
    constructor(props, context){
        //props : is data object and is the only way to pass data between components
        super(props);//this synchronises props to Base Class component
        this.state = {
            title : props.title,
            username : "Some Name",
            address : "Some where on earth"
        }
        this.intervalValue = 1;        
        
        //ref - keyword uses
        //for creating and accessing html out of react flow
        //as we dont have any html selectors available in react so this provides a reference to html
        this.inputAddress = React.createRef(); 
        //this.inputAddress.current.focus(); //view can't be accessed in constructor

        this.inputSession = React.createRef();
    
    }

    // intervalUpdate = setInterval(() => {
    //         this.intervalValue ++;
    //         console.log(this.intervalValue)
    //     }, 1000);
    

    //creation life cycle method
    componentDidMount(){
        console.log("componentDidMount")        
        //view is accessible
        setTimeout(() => {
            this.inputAddress.current.focus();
            this.inputAddress.current.value = "New value after three seconds";
        },3000)        
    }

    onchageHandler = (evt)=>{
        let target = evt.target;
        //console.log(target.value);

        this.setState({
            username : target.value,
        })
        evt.preventDefault();
    }
    
    //update life cycle methods
    //this asks us to decide whether we need to stop calling the render method on state change
    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log("shouldComponentUpdate");
    //     console.log("nextState",nextState);
    //     console.log("nextProps", nextProps);
        
    //     //return true;
    //     if (nextProps.username == this.state.username) {
    //         return false; //to not call the render method
    //     } else {
    //         return true;    
    //     }
    // }

    getSnapshotBeforeUpdate(prevState, prevProps){
        console.log("getSnapshotBeforeUpdate");
        console.log("prevState", prevState);
        console.log("prevProps", prevProps);
        return {
            prevState,
            prevProps
        }
    }

    componentDidUpdate(prevState, prevProps){
        console.log("componentDidUpdate");
        console.log("prevState",prevState);
        console.log("prevProps", prevProps);
    }

    //destruction life cycle method
    componentWillUnmount(){
        console.log("Home component unmount");
        clearInterval(this.intervalUpdate); 
    }

    // form submit handler, to capture values on the UI instead going to action (API)
    handleSubmit = (evt)=>{
        //alert("Form Submitted!!!")
        let session = this.inputAddress.current.value;
        let newAddress = this.inputSession.current.value;

        this.setState({
            session,
            newAddress
        })
        alert(session +" "+ newAddress)

        evt.preventDefault();
    }


    //gets called first time on creation life cycle and then on every update of state or props
    render(){
        console.log("Render method of Home Component")

        return(      

            <div className={"loadimage form"} style={{backgroundImage: "url(/images/hm_pic4.jpg)"}}>
            {/* <p>{this.state.name}</p> */}
            {/* <img src={"./images/hm_pic4.jpg"} /> */}
            <h1>{this.state.title}</h1>
            <b className="feature">{"Below Feature's We've Implemented in our project :"}</b>
            <ul>                     
                <li>Sign up new users</li>
                <li>Login existing users.</li>
                <li>Add products/items to create product collection.</li>
                <li>Allow user's to add to cart.</li>
                <li>Save the user's cart.</li>
                <li>Checkout and pay for items.</li>
                <li>Allow users to cancel the order.</li>
                <li>Allow users to reorder the cart.</li>
                <li>Allow users to give ratings to each product.</li>
                <li>Have notifications on top right with logout.</li>
            </ul>
        </div>


            // <div>
            //     <h1>{this.props.title}</h1>
            //     <p>{this.state.username}</p>
            //     <p>{this.state.address}</p>
            //     <br/>
            
            //     <input type={"text"} className="username form form-input" value={this.state.username} 
            //             onChange={this.onchageHandler}></input>

            //     <input type={"text"} className="address" value={this.state.address} 
            //             onChange={(e)=>{this.setState({ address : e.target.value })}} ></input>

        
        //      {/* We are going to create an uncontrolled html form with html elements, 
        //it is controlled element values are not going to be part of react state */}

            //     <form onSubmit={this.handleSubmit} action="/student/formsubmission">
            //         <label>
            //                 Session Name:
            //                 <input type="text" ref={this.inputSession} placeholder="Please enter session"/>
            //         </label>                    
            //         <label>
            //                 Address:
            //                 <input type="text" ref={this.inputAddress} placeholder="Please enter address"/>
            //         </label>

            //         <input type="submit" value="Submit" />

            //         <div>
            //                 Session: {this.state.session}
            //                 <br/>
            //                 New Address: {this.state.newAddress}
            //         </div>
            //     </form>
            // </div>







        )
    }
}


// Home.propTypes = {
//     title : PropTypes.string.isRequired
// }

Home.defaultProps = {
    title : "Default Title Home"
}