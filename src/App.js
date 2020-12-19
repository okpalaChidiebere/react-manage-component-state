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
  
  render() {	
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <DisplayQuizz />
          <DisplayScore numCorrect={this.state.numCorrect} numQuestions={this.state.numQuestions} />
        </div>
        
      </div>
    )
  }
}


export default App;


