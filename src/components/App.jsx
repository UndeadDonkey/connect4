import React, { Component } from 'react';
import '../css/App.css';
import Answer from './Answer';
import QuestionT from './Question';
import Next from './Next';
import {buildFirebase, getRandomQuestion} from '../clients/firebase.js';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      q_index: 0,
      score: 0,
      ans: [],
      button: []
    }
  }

  questionSetUp(){
    let boxes = []
    let array = [0, 1, 2, 3, 4, 5]
    for(var i = 5; i >= 0; i--){
      let random = Math.floor(Math.random() * (i + 1))
      let removed = array.pop[random]
      if(removed < 4){
        boxes.push(<div>
          <button onClick={()=>this.handleClick()} className="choices 0"><Answer answerText={this.props.fire[this.state.q_index].choices[removed]}/></button>
        </div>);
      } else if(removed === 4){
        boxes.push(<div>
          <button className="choices a"><QuestionT q={this.props.fire[this.state.q_index]} /></button>
        </div>);
      } else{
        boxes.push(<div>
          <button className="choices b"><Answer /></button>
        </div>);
      }
    }
    this.setState({button: boxes})
  }

  correctAnswerClick(){

  }

  addScoreCl(){
    console.log(this.className);
    this.setState({score: this.state.score + 1});
  }

  nextButton(){
    this.setState({q_index: this.state.q_index + 1});
  }

  re(){
    var result = [];
    for(var i = 0; i < 4; i++){
      result.push(<div>
        <button className="choices 1"><Answer answerText={this.props.fire[this.state.q_index].choices[i]}/></button>
      </div>);
    }
    this.setState({ans: result});
  }
  
  render() {
    return (
      <div>
        <div className="app">
          
          <div className="column1">
            <div>
              <button className="choices a"><QuestionT q={this.props.fire[this.state.q_index]} /></button>
            </div>
            <div>
              <button onClick={()=>this.handleClick()} className="choices 0"><Answer answerText={this.props.fire[this.state.q_index].choices[0]}/></button>
            <div>
              <button className="choices 2"><Answer answerText={this.props.fire[this.state.q_index].choices[2]}/></button>
            </div>
            <div>
              <button className="choices 3"><Answer answerText={this.props.fire[this.state.q_index].choices[3]}/></button>
            </div>
            <div>
              <button className="choices b"><Answer /></button>
            </div>
          </div>
        </div>
        <div className="end">
          <button onClick={()=>this.nextButton()} className="next"><Next /></button>
          <p>Score: {this.state.score}</p>
        </div>
      </div>
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