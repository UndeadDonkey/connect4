import React, { Component } from 'react';
// import components


class QuestionT extends Component {
  
  render() {
    return (
      <div>
        {this.props.q.question_text} 
      </div>
    );
  }
}

export default QuestionT;