import {  useState } from 'react';
import './App.css';
import Grid from './components/Grid';
import Header from './components/Header';
import Keyboard from './components/keyboard/Keyboard';
import {layout} from './components/keyboard/layout'


function App() {
  const [guess, setGuess] = useState("guess")

     
  
  
  
  const handleKeyUp = (e)=>{
    let letter = e.key
    if (/^[a-z]+$/i.test(letter) && letter.length===1){
      
      setGuess(guess+letter)
      console.log(guess+letter)
    }else if(letter==="Backspace"){
      console.log("bs")
      setGuess(guess.slice(0, guess.length-1))
    }
  }
  document.addEventListener('keyup', handleKeyUp, true)
 


  return (
    <div className="App">
      <Header  />
      <Grid />
      <hr />
    <h1>{guess}</h1>
      <Keyboard layout={layout}/>
    </div>
  );
}

export default App;
