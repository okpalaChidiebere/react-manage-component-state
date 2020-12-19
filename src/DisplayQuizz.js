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
    
    render() {
      const { value1, value2, value3, proposedAnswer } = this.state;

      return (
        // without this '(', JS will automatically put a ';' after 'return.'
        <div>
          <div className="equation">
            <p className="text">{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</p>
          </div>
          <button name="true">
            True
          </button>
          <button name="false">
            False
          </button>
        </div>
      )
      
    }
     
  }

export default DisplayQuizz;