import React from 'react';


class DisplayQuizz extends React.Component{
  
    constructor(props){
      super(props);
      
      const valuesArray = this.makeNewQuestion();
      this.state = {
        value1: valuesArray[0],
        value2: valuesArray[1],
        value3: valuesArray[2],
        proposedAnswer: valuesArray[3],
      };
      
    }
    
    makeNewQuestion = () => {
      const value1 = Math.floor(Math.random() * 100);
      const value2 = Math.floor(Math.random() * 100);
      const value3 = Math.floor(Math.random() * 100);
      const proposedAnswer = Math.floor(Math.random() * 3) + (value1 + value2 + value3);
      return [value1, value2, value3, proposedAnswer];
    };

    //This wil be used to set the next question. Note that we did not use the previousState() value to set the next state because next question does not depend on the previous question
    //The function updateState takes in a new question then updates the UI with the new question by calling the setState() method
    updateState = newValuesArray => {
        this.setState(currState => ({
          value1: newValuesArray[0],
          value2: newValuesArray[1],
          value3: newValuesArray[2],
          proposedAnswer: newValuesArray[3],
        }));
    };

    //This method will be called when the user clickes the true or false button
    //It update the UI with a new question by calling the updateState
    handleAnswer = event => {
        const newValuesArray = this.makeNewQuestion(); //gets a new question
        this.updateState(newValuesArray); //updates the UI
    };
    
    render() {
      const { value1, value2, value3, proposedAnswer } = this.state;

      return (
        // without this '(', JS will automatically put a ';' after 'return.'
        <div>
          <div className="equation">
            <p className="text">{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</p>
          </div>
          <button name="true" onClick={this.handleAnswer}>
            True
          </button>
          <button name="false" onClick={this.handleAnswer}>
            False
          </button>
        </div>
      )
      
    }
     
  }

export default DisplayQuizz;