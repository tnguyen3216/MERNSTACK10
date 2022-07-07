import React, {Component} from 'react'

export default class ProductComponent extends Component{
    constructor(props){
        super(props)
        this.state={
            
            name: props.name,
            price: props.price,
            desc: props.desc,
            rating: props.rating
    }
        
    }
    onTextChange = (evt)=>{
        let target = evt.target;
        let classList = target.classList;
        let value = target.value;
        
        console.log("classlist ", classList)


        if(classList.contains("name")){
            this.setState({
               name : value
            })
        } else if(classList.contains("price"))
        {
            this.setState({
                price : value
            })
        }else if(classList.contains("desc")){
            this.setState({
               desc : value
            })
        }else if (classList.contains("rating") && value.length <= 11) {
            this.setState({
                rating: value
            })    
        } 

        evt.preventDefault();
    }

    saveProduct(){
        
    }
    render(){
        return(
            <div>
            <h1>Product form</h1>
            <p>{this.state.name}</p>
            <form>
                <label>Product Name</label>
                <input type="text" className="name" value = {this.state.name} onChange = {this.onTextChange}/>

                <label>Product Price</label>
                <input type="text" className="price" value = {this.state.price} onChange = {this.onTextChange} />

                <label>Product Description</label>
                <input type="text" className="desc" value = {this.state.desc} onChange = {this.onTextChange} />

                <label>Product Rating</label>
                <input type="text" className="rating" value = {this.state.rating} onChange = {this.onTextChange}/>
                {/* on click dispatch save product action */}
                <input type ="submit" onClick={this.saveProduct}/> 
            </form>
        
        </div>)
    }
}