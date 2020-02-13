import React, { Component } from 'react';
import '../css/App.css';
import Answer from './Answer';
import QuestionT from './Question';
import {buildFirebase, getRandomQuestion} from '../clients/firebase.js';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      q: [
        new Question()
      ],
    }
  }
  render() {
    console.log(this.props.fire[1].choices[1]);
    return (
      <div className="app">
        <Answer />
        <button className="choices"><QuestionT q={this.props.fire[1]} /></button>
        <button className="choices"></button>
        <button className="choices"></button>
        <button className="choices"></button>
        <button className="choices"></button>
        <button className="choices"></button>
        
        
      </div>
    );
  }
}

buildFirebase();
class Question {
  constructor(choices, correct_index, question_text, user_id){
    this.choices = choices;
    this.correct_choices_index = correct_index;
    this.question_text = question_text;
    this.user_id = user_id;
  }
  getQ(){
      return this.question_text;
  }
}
export default App;