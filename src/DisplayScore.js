import React from 'react';


const DisplayScore = props => {
    return (
      <p className="text">
        Your Score: {props.numCorrect}/{props.numQuestions}
      </p>
    );
};
  
export default DisplayScore;