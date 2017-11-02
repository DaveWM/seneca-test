import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Toggle} from "./Toggle";

class App extends Component {

    constructor() {
        super();
        this.state = {
            isCold: false
        };
    }

  render() {
    return (
      <div className="container">
        <Toggle falseLabel="Hot" trueLabel="Cold" value={this.state.isCold} onToggle={(val => this.setState({isCold: val})).bind(this)}></Toggle>
      </div>
    );
  }
}

export default App;
