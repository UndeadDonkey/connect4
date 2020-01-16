import React, { Component } from 'react';
import '../css/App.css';
import Answer from './Answer';
import Question from './Question';
// import components

class App extends Component {
  var QnA = [];
  for(var i = 0; i < 6; i++){
    var index = Math.floor(Math.random() * 6);
  }
  render() {
    return (
      <div className="app">
        <Answer />
        <Question />
        
      </div>
    );
  }
}

export default App;