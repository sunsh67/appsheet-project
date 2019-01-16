import React, { Component } from 'react';
import DummyList from './dummyList/DummyList';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state ={};

  }

  render() {
    return (
      <div className="App">
      <DummyList/>
      </div>
    );
  }
}

export default App;
