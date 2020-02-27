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
      correctAnsIndex: null,
      button: []
    }
  }

  questionSetUp(){
    this.setState({correctAnsIndex : this.props.fire[this.state.q_index].correct_choice_index});
    let boxes = [];
    let array = [0, 1, 2, 3, 4, 5];
    for(var i = 5; i >= 0; i--){
      let random = Math.floor(Math.random() * (i + 1));
      let removed = array[random];
      array.splice(random, 1);
      if(removed < 4){
        console.log(this.state.correctAnsIndex);
        if(removed === this.state.correctAnsIndex){
          boxes.push(<div>
            <button className="choices 0" onClick={()=>this.addScore()}><Answer answerText={this.props.fire[this.state.q_index].choices[removed]}/></button>
          </div>);
        } else{
          boxes.push(<div>
            <button className="choices 0" onClick={()=>this.wrongChoice()}><Answer answerText={this.props.fire[this.state.q_index].choices[removed]}/></button>
          </div>);
        }
      } else if(removed === 4){
        boxes.push(<div>
          <button className="choices a" onClick={()=>this.wrongChoice()}><QuestionT q={this.props.fire[this.state.q_index]} /></button>
        </div>);
      } else{
        boxes.push(<div>
          <button className="choices b" onClick={()=>this.wrongChoice()}><Answer answerText={""}/></button>
        </div>);
    }
  }
    this.setState({button : boxes});
  }
  addScore(){
    this.setState({score: this.state.score + 1});
    alert("This is the correct answer");
  }

  wrongChoice(){
    alert("You clicked the wrong choice");
  }

  nextButton(){
    this.setState({q_index: this.state.q_index + 1});
    this.questionSetUp();
  }

  componentDidMount(){
    this.questionSetUp();
  }
  
  render() {
    return (
      <div>
        <div className="app">
          <div className="column1">
            {this.state.button.slice(0, 3).map(eachThing =>(eachThing))}
          </div>
          <div className="column2">
            {this.state.button.slice(3).map(eachThing =>(eachThing))}
          </div>
        </div>
        <div className="end">
          <button onClick={()=>this.nextButton()} className="next"><Next /></button>
          <p>Score: {this.state.score}</p>
        </div>
      </div>
    );
  }
}

buildFirebase();
class Question {
  constructor(choices, correct_choice_index, question_text, user_id){
    this.choices = choices;
    this.correct_choice_index = correct_choice_index;
    this.question_text = question_text;
    this.user_id = user_id;
  }
  getQ(){
      return this.question_text;
  }
}
export default App;