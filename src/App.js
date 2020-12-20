import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import DisplayQuizz from './DisplayQuizz';
import DisplayScore from './DisplayScore';



/*const value1 = Math.floor(Math.random() * 100);
const value2 = Math.floor(Math.random() * 100);
const value3 = Math.floor(Math.random() * 100);
const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;*/
//const numQuestions = 0;
//const numCorrect = 0;


class App extends Component {


  /*
  We could have declared the state variable inside of the constructor like this:
  constructor(props){
    super(props);
    this.state = {
      correctAnswer: 0,
      numQuestions: 0
    };
  }

  Here, we're using the ESnext field declarations proposal syntax in order to write
  less code:
  https://github.com/tc39/proposal-class-fields
  */
  state = {
    numCorrect: 0, //keeps track of the number of questions the users got correct
    numQuestions: 0,  //keeps track of number of question asked
  };

  //This arrow function updates the count for the number of questions the user got right(numCorrect) and the total number of questions(numQuestions)
  //One good thins about state, is that wherever the state keys are passed into components that gets updated automatically when the steState() is called for those keys
  //We have to pass this function as props to the child component(DisplayQuizz) so that the DisplayQuizz can reference and call this function after checking for if the user gets the correct anser to the question right or wrong 
  handleAnswer = answerWasCorrect => {
    if (answerWasCorrect) { // the user have to get the question right for this state to be updated
      this.setState(currState => ({
        numCorrect: currState.numCorrect + 1,
      }));
    }
    //the number of questions will always be counted and updated
    this.setState(currState => ({
      numQuestions: currState.numQuestions + 1,
    }));
  };
  
  render() {	
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <DisplayQuizz handleAnswer={this.handleAnswer} />
          <DisplayScore numCorrect={this.state.numCorrect} numQuestions={this.state.numQuestions} />
        </div>
        
      </div>
    )
  }
}


export default App;


