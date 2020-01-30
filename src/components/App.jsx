import React, { Component } from 'react';
import '../css/App.css';
import Answer from './Answer';
import QuestionT from './Question';
// import components

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      q: [
        new Question([333,222,"alex",444], 2, "Yeet", "ygfjgfegfh"),
        new Question([333,222,"alex",444], 2, "Yee", "ygfjgfegfh"),
        new Question([333,222,"alex",444], 2, "Ye", "ygfjgfegfh"),
        new Question([333,222,"alex",444], 2, "Y", "ygfjgfegfh")
      ],
    }
  }
  render() {
    return (
      <div className="app">
        <Answer />
        <button className="choices"><QuestionT q={this.state.q[0].question_text} /></button>
        <button className="choices"></button>
        <button className="choices"></button>
        <button className="choices"></button>
        <button className="choices"></button>
        <button className="choices"></button>
        <p>{this.state.q[0].getQ()}</p>
        
      </div>
    );
  }
}

class Question {
  constructor(choices, correct_index, question_text, user_id){
    this.choices = choices;
    this.correct_choices_index = correct_index;
    this.question_text = question_text;
    this.user_id = user_id;
  }
  getQ(){
      return this.question_text
  }
}
export default App;