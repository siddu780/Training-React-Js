import React,{Component} from "react";
class CBCProps1 extends Component{
    render(){
        console.log(this);
        return(
            <div>CBCProps1
                <h1>{this.props.username}</h1>
                <h2>{this.props.age}</h2>
                {/* <div>
                    {this.props.designation[0]}
                </div> */}
                {/* <h2>{this.props.userDetails.area}</h2> */}
                <button onClick={this.props.sendFun}>Click</button>
            </div>
        )
    }
}
export default CBCProps1;