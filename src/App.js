import React from "react";
import "./style.css";

class App extends React.Component{
  constructor(){
    super();
    this.firstref=React.createRef();
    this.secondref=React.createRef();
    this.btnref=React.createRef();
    this.state={
      result:''
    }
  }
  componentDidMount(){
    this.firstref.current.focus();
  }
  input1=(e)=>{
    if(e.key==='Enter'){
     this.secondref.current.focus();
    }
  }
  input2=(e)=>{
    if(e.key==='Enter'){
     this.btnref.current.focus();
    }
  }
  add=()=>{
    var n1 = +this.firstref.current.value;
    var n2 = +this.secondref.current.value;
    var res = n1+n2;
    this.setState({result:res});
  }
  render(){
    return(
      <div>
        <h2>onclick(Enter)focus:</h2>
        Num-1:<input type="text" ref={this.firstref} onKeyUp={this.input1}/><hr/>
        Num-2:<input type="text" ref={this.secondref} onKeyUp={this.input2}/><hr/>
        <button ref={this.btnref} onClick={this.add}>Add</button>&nbsp;Result:<span>{this.state.result}</span>
      </div>
    )
  }
}
export default App;