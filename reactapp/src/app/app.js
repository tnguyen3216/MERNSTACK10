import React, { Component, PureComponent } from "react"; //React - default import , Component - named import
import "./app.css"
import {BrowserRouter as Router, Routes, Redirect, Route} from "react-router-dom";// browser router from react

import FooterComponent, {pi} from "./CommonComponents/FooterComponent";
import DummyComponent from "./CommonComponents/DummyComponent";
import HeaderComponent from "./CommonComponents/HeaderComponent";
import Home from "./CommonComponents/HomeComponent";
import About from "./CommonComponents/AboutComponent";
import NotFound from "./CommonComponents/NotFoundComponent";
import ProductComponent from "./ApplicationComponent/Product/Component/ProductComponent";
//import UserComponent from "./ApplicationComponent/User/Component/UserComponent";
import UserContainer from "./ApplicationComponent/User/Container/UserContainer";
import DisplayProduct from "./ApplicationComponent/Product/Component/DisplayProduct";
import UserHooks from "./ApplicationComponent/User/Component/UserHooksComponent"
import CartComponent from "./ApplicationComponent/Cart/CartComponent";
import CheckoutComponent from "./ApplicationComponent/Checkout/CheckoutComponent"
import CouponComponent from "./ApplicationComponent/Coupon/CouponComponent"
import OrderComponent from "./ApplicationComponent/Order/OrderComponent"
import CanceledOrderComponent from "./ApplicationComponent/Order/CanceledOrderComponent"
import {DisplayProductReview} from "./ApplicationComponent/Product/Component/DisplayProductReview"
import {ReviewComponent} from "./ApplicationComponent/Review/ReviewComponent"
export default class AppComponent extends Component{

    render(){
        return(
            <Router>
                <HeaderComponent/>
                    <Routes>
                        <Route path="/" element={<Home  title="Home Component" />} />
                        <Route path="/home" element={<Home  title="Home Component" />} />
                        <Route path="/user" element={<UserContainer />} />
                        <Route path="/product" element={<ProductComponent/>} />
                        <Route path="/display" element={<DisplayProduct />} />
                        <Route path ="/cart" element = {<CartComponent/>}/>
                        <Route path ="/userhook" element={<UserHooks/>}/>
                        <Route path ="/checkout" element={<CheckoutComponent/>}/>
                        <Route path ="/coupon" element={<CouponComponent/>}/>
                        <Route path ="/order" element={<OrderComponent/>}/>
                        <Route path ="/canceledorder" element={<CanceledOrderComponent/>}/>
                        <Route path ="/review" element={<ReviewComponent/>}/>
                        <Route path ="/reviewproduct" element={<  DisplayProductReview/>}/>
                      
                        <Route path="/about" element={<About />} />
                        <Route path="/about/:id" element={<About />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                <FooterComponent/>
            </Router>
        )
    }


}




//old code
//export default class AppComponent extends Component //React.Component 

//Pure Component contains predefined implementation of ShouldComponentUpdate
// export default class AppComponent extends PureComponent
// {
//     constructor(props){
//         super(props);

//         //state object is used to allow changes with the help of predefined api's in react 
//         //(setState and forceUpdate)
//         this.state = {
//             name : "Default Name",
//             address : "Default Address"
//         }
//     }

//     //whenever we define and event listner javascript provide event object bydefault(evt)
//     handleClick = (evt )=>{
//         //react needs to re-render to show the changed values (state)
//         //re-render can only be done when we change the state with predefined api's (setstate, forceupdate)
        
//         //using setState allows us to go with the lifecycle methods of component
//         //the state changes are done with api in batch process manner
//         this.setState({
//             name : "Toan",
//             address : "Somewhere in vietname"
//         },()=>console.log("state is updated"))

//         console.log("state change value ", this.state) //? immediately we dont see the update
//         //alert("We will change the state values")

//         //we should avoid using forceUpdate to update the state, as it skips the life cycle methods
//         //this.state.name = "TN",
//         //this.forceUpdate();

//         evt.preventDefault();//preventing the default behaviour of the html element
//     }

//     //update life cycle method
//     // shouldComponentUpdate(nextState, nextProps){
//     //     console.log("nextState ", nextState)
//     //     console.log("nextProps ", nextProps)
//     //     if (this.state.name == nextProps.name) {
//     //         return false
//     //     } 

//     //     return true;
//     // }

//     getChildData = (data)=>{
//         alert("Data from child " + JSON.stringify(data))
//     }

//     render(){
//         console.log("Render in app component")
//         let address = "Somewhere on earth"; //js variable
//         //this returns virtual dom (view) and it should have only one parent returned
//         //JSX - javascript like xml structure -> virtual dom
//         return( 
//             <div>
//                 <h1>Application Component</h1> 
//                 <p><b>{address +"  "+ pi}</b></p>
//                 <FooterComponent></FooterComponent>
//                 {/* <DummyComponent userName={"Toan"} userAddress={"Somewhere in US"}/> */}

//                 <DummyComponent userName={this.state.name} userAddress={this.state.address} getData={this.getChildData} >
//                     {/* <h1>{"The First Header From Parent App Component"}</h1> */}
//                     <FooterComponent/>
//                     <h2>{"The Second Header From Parent App Component"}</h2>
//                 </DummyComponent>
//                 <button onClick={this.handleClick} >Click To Update</button>
//             </div>            
//         )
//     }
// }


//create two state fields in app.js and then set the state with the values passed from DummyComponent
//show the state values in app component somewhere, instead of alert