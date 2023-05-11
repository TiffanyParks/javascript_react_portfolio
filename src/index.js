import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const DATA =[
    {id: "card-0", name: "About Me"},
    {id: "card-1", name: "My Work"},
    {id: "card-2", name: "Contact Me"},
];
console.log(DATA)
ReactDOM.render(<App cards={DATA}/>, document.getElementById('root'));
