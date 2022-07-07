console.log("Entry Point of our application");
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";// provider component will make sure that it wraps whole react appln and has store object in it
import store from "./app/State/store"; //store a collection of all states and reducers

import AppComponent from "./app/app";

render(//provider provides access to states (store) in components either being publisher or subscriber
    <Provider store={store}> 
        <AppComponent/>
    </Provider>,//which application you want to render,
    document.getElementById("root") //bootstrapping of application in root element of index.html
)