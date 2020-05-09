import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import A from './AppA'

class App extends Component {
  render() {
    return (
      <div className="App">
        <A color="#FFA737" greetTarget="Batman"/>
      </div>
    );
  }
}

export default App;
