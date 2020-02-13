import React from 'react';
import ReactDOM from 'react-dom';
import './css/App.css';
import App from './components/App';
import {buildFirebase, getRandomQuestion} from './clients/firebase.js';

buildFirebase();

let database = buildFirebase();
let databaseRef = database.ref("/questions");
databaseRef.once("value").then(function(data) {
    const questions = Object.values(data.val());
    ReactDOM.render(<App fire={questions}/>, document.getElementById('root'));
});

