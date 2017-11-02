import React  from 'react';
import './Toggle.css';

const toClassString = (classesObj) => {
    return Object.keys(classesObj)
        .reduce((classString, k) => {
            if(classesObj[k]){
                return classString + " " + k;
            }
            return classString;
        })
}

export function Toggle ({trueLabel, falseLabel, value, onToggle}) {
    return (
        <div className="toggle">
            <div className={toClassString({"toggle__option": true, "toggle__option--selected": !value})} onClick={() => onToggle(false)}>
                <label>{falseLabel || "False"}</label>
            </div>
            <div className={toClassString({"toggle__option": true, "toggle__option--selected": value})} onClick={() => onToggle(true)}>
                <label>{trueLabel || "True"}</label>
            </div>
            <div className="toggle__selected" style={{left: value ? '50%' : '0'}}></div>
        </div>
    )
}