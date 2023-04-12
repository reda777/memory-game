import {useEffect, useState} from 'react';
import Counter from "./Counter";
import Cards from './Cards';
function App() {
  const [score,setScore]=useState(0);
  const [bestScore,setBestScore]=useState(0);
  const [clicked,setClicked]=useState([]);
  useEffect(()=>{
    setScore(clicked.length);
  },[clicked])
  return (
    <div className="App">
      <div className="left">
        <div className="siteName">Memory Game</div>
        <Counter score={score} bestScore={bestScore}/>
      </div>
      <div className="right">
        <Cards bestScore={bestScore} setBestScore={setBestScore} clicked={clicked} setClicked={setClicked} />
      </div>
    </div>
  );
}

export default App;
