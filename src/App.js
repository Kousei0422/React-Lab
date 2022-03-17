
import { Component } from 'react';
import ChallengeOne from './components/ChallengeOne.jsx';
import ChallengeTwo from './components/ChallengeTwo.jsx';

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>React Lab 101</h1>
        {/* Import Components (ChallengeOne and Challenge Two) here */}
        <ChallengeOne />
        <ChallengeTwo />
      </div>
    );
  }
}

export default App;
