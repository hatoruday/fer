import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import firebase from "./fbase";
//import VConsole from "vconsole";

//const vConsole = new VConsole();

console.log(firebase);
ReactDOM.render(<App />, document.getElementById('root'));