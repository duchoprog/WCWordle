import { useState, useEffect } from 'react';
import './App.css';
import Grid from './components/Grid';
import Header from './components/Header';
import Keyboard from './components/keyboard/Keyboard';
import {layout} from './components/keyboard/layout';
import { ValidWords } from './constants/validWords';
import { Words } from './constants/words';
import setCharAt from './utils/SetCharAt';



function App() {
  const [position, setPosition] = useState(0)
  const [guess, setGuess] = useState('');
  
  const [answer, setAnswer] = useState("")
  
  useEffect(() => {
    setAnswer(Words[Math.floor(Math.random()*Words.length)])
  }, [])


  const checkLetters = (guess,answer)=>{
    let localGuess=guess
    let localAnswer=answer
    let totallyRight=0


    if(ValidWords.indexOf(guess)>=0){    
    //Check right letter and right position
    for(let i=0; i< answer.length; i++){
      if(answer[i]===localGuess[i]){
        setGuesses([...guesses, guesses[currentLine].colors[i]="green"])
        localGuess = setCharAt(localGuess,i,"+")
        localAnswer = setCharAt(localAnswer,i,"0")
        totallyRight +=1
        if(totallyRight===5){
          console.log("you won")
        }
        console.log(localAnswer);
      }
    }
      //Check right letter, wrong position
      for(let j=0; j< answer.length; j++){
        if(localAnswer.indexOf(localGuess[j])>=0){
          localAnswer=setCharAt(localAnswer, localAnswer.indexOf(localGuess[j]),"-")
          setGuesses([...guesses, guesses[currentLine].colors[j]="yellow"])
        }
      }
    
    setCurrentLine(currentLine=>currentLine+1)
    setGuess("")
    setPosition(0)
  } else {
    console.log(" animate__animated animate__shakeX");
  }
  }
  const [currentLine, setCurrentLine] = useState(0)
 const [guesses, setGuesses] = useState([
  {word:"     ",
  colors:[]},
  {word:"     ",
  colors:[]},
  {word:"     ",
  colors:[]},
  {word:"     ",
  colors:[]},
  {word:"     ",
  colors:[]},
  {word:"     ",
  colors:[]},
 ])
  
  const handleKeyUp = (e) => {
    let letter = e.key;

    if (/^[a-z]+$/i.test(letter) && letter.length===1 && guess.length<5) {
      setGuess(prevGuess=>prevGuess+letter) ;
      setGuesses ([...guesses, guesses[currentLine].word=setCharAt(guesses[currentLine].word,position,letter)])
      setPosition (prevPosition=>prevPosition+1)
  
    } else if (letter === "Backspace" && guesses[currentLine].word.length>=1 && guess.length>=1) {
      console.log(guesses[currentLine].word.slice(0,guesses[currentLine].word.length-1 ))
      
      setGuesses([...guesses, guesses[currentLine].word = setCharAt(guesses[currentLine].word, position-1," ") ]) ;
      setGuess(guess.slice(0, guess.length-1))
      console.log(guesses[currentLine].word)
      setPosition(prevPosition=>prevPosition-1)
    }else if(letter === "Enter" && guesses[currentLine].word[4]!==" "){  
      checkLetters(guesses[currentLine].word, answer)  

      }
  };

  // Add the handleKeyUp event listener
  useEffect(() => {
    document.addEventListener('keyup', handleKeyUp, true);

    // Return a cleanup function that will be called when the component is unmounted
    return () => {
      // Remove the handleKeyUp event listener
      document.removeEventListener('keyup', handleKeyUp, true);
    };
  }, [guess]); // Update the effect when the guess state changes



  return (
    <div className="App">
      <Header  />
      <Grid currentLine={currentLine} guesses={guesses} />
      <Keyboard layout={layout}/>
    </div>
  );
}

export default App;

