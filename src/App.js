import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import on from "./images/on.jpg";
import off from "./images/off.jpg";

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {arr: [
      {
        'button': 'false'
      },
      {
        'button': 'false'
      },
      {
        'button': 'false'
      },
      {
        'button': 'false'
      },
      {
        'button': 'false'
      },
      {
        'button': 'false'
      },
      {
        'button': 'false'
      },
      {
        'button': 'false'
      },
      {
        'button': 'false'
      },
      {
        'button': 'false'
      }
    ]};
  }
   changeState = (index) =>{
    let temp = this.state.arr;
    temp[index].button = !(temp[index].button);
    this.setState({arr:temp}); 
  }
  render() {
    return(
      <div>
      {this.state.arr.map((ele,index)=>{
        return (
          <div className='bulb'>
            <img className='img' src={ele.button?off:on}></img>
            <button className='btn btn-primary' onClick={() => this.changeState(index)}>{ele.button?"OFF":"ON"}</button>
          </div>
        )
      })}    
      </div>
    )
  }
}
export default App;

//------------------------------------------------------------//



