import {Component} from "react";
class Components1 extends Component{
    constructor(props){
        super(props);
        this.state={
            a:"Follow"
        };
    }
    changetext=()=>{
        (this.state.a==='Follow')
        ?this.setState({a:"Following"})
        :this.setState({a:"Follow"})
    }
  render(){  
    return(
        <>
            <button onClick={this.changetext}>{this.state.a}</button>
        </>
    )
   }
}

export default Components1;