import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../src/styles/index.css'

import About from "./pages/About"
import Work from "./pages/Work"
import Contact from "./pages/Contact"

const DATA =[
    {id: "card-0", name: "About Me", content: <About/>},
    {id: "card-1", name: "My Work",  content: <Work/>},
    {id: "card-2", name: "Contact Me", content: <Contact/>},
];
// console.log(DATA)
ReactDOM.render(<App cards={DATA}/>, document.getElementById('root'));
