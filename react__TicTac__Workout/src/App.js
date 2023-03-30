import './App.css';
import Board from './components/Board';
import { useState } from 'react';



function App() {
  const [squares, setSquares] = useState(Array(10).fill(null));
  return (
    <>
     <Board squares={squares} setSquares={setSquares} />
    </>
  );
}

export default App;
