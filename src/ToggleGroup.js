import './ToggleGroup.css';
import React  from 'react';

export function ToggleGroup({title, isCorrect, background, children}) {
    return (
        <div className="toggle-group" style={{background: background}}>
            <h2>{title}</h2>
            {children}
            <p>{"The answer is " + (isCorrect ? "correct" : 'incorrect')}</p>
        </div>
    )
}