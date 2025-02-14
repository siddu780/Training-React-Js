import React,{Component} from "react";
class CBCStateEx extends Component{
    constructor(){
        super();
        this.state={
            username:"Pranav"
        };
    }
    changeName=()=>{
        this.setState({username:"Shravan"});
    }
    render(){
        console.log(this)
        return(
            <div>CBSStateEx
            <h1>{this.state.username}</h1>
            <button onClick={this.changeName}>Updat</button>
            </div>
        )
    }
}
export default CBCStateEx;