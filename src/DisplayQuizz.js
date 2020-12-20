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
        const answerWasCorrect = this.evaluateAnswer(event.target.name); //event.target.name returns the name for the tag clicked. In our case, the tag is Button and the name can be true or false. We usually give unique name(s) to button(s) so that we can knw the specific one clicked on a page 
        this.props.handleAnswer(answerWasCorrect); //we call the function passed as props from the parent or ancestor component Apps then pass true of false depending on what evaluateAnswer method returns
    };

    evaluateAnswer(givenAnswer) {
        const { value1, value2, value3, proposedAnswer } = this.state; //FYI: remeber proposed anser is defined when making a question the user have to just say if the proposed anser is correct or not
        const corrAnswer = value1 + value2 + value3;
    
        //returns true if any of the two conditions are met, otherwise it will return false
        return (
          (corrAnswer === proposedAnswer && givenAnswer === 'true') ||
          (corrAnswer !== proposedAnswer && givenAnswer === 'false')
        );
      }
    
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