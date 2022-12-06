import { useEffect, useState } from 'react';
import './App.css';
import EntryLine from './components/EntryLine';
import Grid from './components/Grid';
import Header from './components/Header';

function App() {
  const [guess, setGuess] = useState("")

  useEffect(() => {
    
  document.addEventListener('keydown', handleKeyDown, true)
 
  }, [])
  
  const handleKeyDown = (e)=>{
    let letter = e.key
    if (letter.charCodeAt(0)<91){
      console.log(letter, letter.charCodeAt(0));
    }
  }
 
 

  return (
    <div className="App">
      <Header  />
      <Grid />
      <hr />
      <EntryLine guess={guess} />

    </div>
  );
}

export default App;
