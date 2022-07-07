import React from "react";

//props : is used to share data between components, its the only way
let DummyComponent = (props) => {
    //props are immutable, as they belong to parent component
    //props.userName = "Toan Ng";//will not be allowed
    let dataFromParent = props;
    console.log("Dummy Component");

    //data object to be passed to parent
    let dataObj = {
        Session : "MERNStack",
        Topic : "React"
    }
    return(
        <>
        <h1>Dummy Component From Common Component</h1>
            <p>{dataFromParent.userName}</p>
            <p>{dataFromParent.userAddress}</p>

            {props.children && props.children[0]}
            {props.children && props.children[1]}
            <br/>
            <button onClick={()=>props.getData(dataObj)} >Click To Pass Data To Parent</button>
        </>
    )
} 

export default DummyComponent;