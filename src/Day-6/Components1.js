import {Component} from "react";
class Components1 extends Component{
    constructor(props){
        super(props);
        this.state={
            a:10,b:20
        };
    }
  
  render(){  
    return(
        <>
            <button>{this.state.a}</button>
            <button>{this.state.b}</button>
        </>
    )
   }
}

export default Components1;