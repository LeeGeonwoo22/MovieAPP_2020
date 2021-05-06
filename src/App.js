import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props)
    console.log('hello')
  }
  state ={
    count : 0,
  }

  add = () =>{
    this.setState({ count : 1});
  };

  minus = () =>{
    this.setState({count : -1});
  };

  componentDidMount(){
    console.log('component rendered')
  }

  componentDidUpdate(){
    console.log('component update rendering')
  }

  componentWillUnmount(){
    console.log('Goodbye, cruel world')
  }
  
  render() {
    console.log("I'm render")
    return (
    <div>
    <h1>The number is:{this.state.count}</h1> 
    <button onClick={this.add}>Add</button>
    <button onClick={this.minus}>Minus</button>
    </div>
    
    );
    
  }
}

export default App;