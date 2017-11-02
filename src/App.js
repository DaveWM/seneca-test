import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Toggle} from "./Toggle";
import {ToggleGroup} from "./ToggleGroup";

class App extends Component {

    constructor() {
        super();
        this.state = {
            warm: false,
            water: false,
            food: false
        };
    }

    render() {
        return (
            <div className="container">
                <ToggleGroup title="Ideal conditions for bacterial growth" isCorrect={this.state.food && this.state.warm && this.state.water}>
                    <Toggle falseLabel="Cold" trueLabel="Warm" value={this.state.warm}
                            onToggle={(val => this.setState({warm: val})).bind(this)}></Toggle>
                    <Toggle falseLabel="No water" trueLabel="Water" value={this.state.water}
                            onToggle={(val => this.setState({water: val})).bind(this)}></Toggle>
                    <Toggle falseLabel="No food" trueLabel="Food" value={this.state.food}
                            onToggle={(val => this.setState({food: val})).bind(this)}></Toggle>
                </ToggleGroup>
            </div>
        );
    }
}

export default App;
