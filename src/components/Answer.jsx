import React, { Component } from 'react';
// import components


class Answer extends Component {
  
  render() {
    return (
      <div>
          {this.props.answerText}
      </div>
    );
  }
}

export default Answer;