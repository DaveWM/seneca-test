import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Toggle} from "./Toggle";
import {ToggleGroup} from "./ToggleGroup";

const questionsCorrectToColourMap = {
    0: ['#fa9161', '#f73b1c'],
    1: ['#E79455', '#DE662F'],
    2: ['#F1D469', '#E6A133'],
    3: ['#47e4c1', '#07cddd']
};

function getBackground(numCorrect) {
    const [from, to] = questionsCorrectToColourMap[numCorrect];
    return `linear-gradient(to bottom, ${from}, ${to})`;
}

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
        const questionsCorrect = ['warm', 'water', 'food']
            .map(prop => this.state[prop])
            .reduce((numCorrect, questionCorrect) => questionCorrect ? numCorrect + 1 : numCorrect, 0);
        return (
            <div className="container">
                <ToggleGroup background={getBackground(questionsCorrect)} title="Ideal conditions for bacterial growth" isCorrect={this.state.food && this.state.warm && this.state.water}>
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
