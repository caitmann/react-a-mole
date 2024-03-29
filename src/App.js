import './App.css';
import MoleContainer from './components/MoleContainer';
import {useState} from 'react';

function App() {
  let [score, setScore] = useState(0)

  const createMoleHill = () => {
    let hills = []
    for (let i=0; i<9; i++) {
      hills.push(
        <MoleContainer
        key = {i}
        setScore = {setScore}
        score = {score} />
      )
    }
    return (
      <div>
        {hills}
      </div>
    )
  }

  return (
    <div>
      <header>

      </header>
      <main>
        <div>
          <h1>React-a-Mole!</h1>
          {score}
          {createMoleHill()}
        </div>
      </main>
    </div>
  );
}

export default App;
