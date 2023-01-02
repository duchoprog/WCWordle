import { useState, useEffect } from 'react';
import './App.css';
import Grid from './components/Grid';
import Header from './components/Header';
import Keyboard from './components/keyboard/Keyboard';
import {layout} from './components/keyboard/layout';
import { ValidWords } from './constants/validWords';
import { Words } from './constants/words';
import setCharAt from './utils/SetCharAt';
import Modal from "./components/Modal";


function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState(0)
  const [guess, setGuess] = useState('');
  const [kbLayout, setKbLayout] = useState([])
  const [answer, setAnswer] = useState("")
  const [won, setWon] = useState(false)
 
  useEffect(() => {
      setAnswer(Words[Math.floor(Math.random()*Words.length)])
    }, [])

  useEffect(() => {
    setKbLayout([...layout]) 
  }, [answer])
  
  const updateKeyboard = ((letter, color) => { 
    let newKbLayout=[...kbLayout]
    newKbLayout.forEach((line, index)=>{
      let searchIndex = (line.findIndex(el => el.text===letter))
      if (searchIndex>=0 && letter>"?"){
        if(color === "green" || color === "gray"){
          line.splice(searchIndex,1,{color:color,text:letter})
        } else if (color==="yellow" && line[searchIndex].color!=="green"){
          line.splice(searchIndex,1,{color:color,text:letter})  
        }
      }
    })
  })
  const processLetter = (letter) => {
    if (/^[a-z A-Z]+$/i.test(letter) && letter.length===1 && guess.length<5) {

        setGuess(prevGuess=>prevGuess+letter) ;
        setGuesses ([...guesses, guesses[currentLine].word=setCharAt(guesses[currentLine].word,position,letter)])
        setPosition (prevPosition=>prevPosition+1)
    
      } else if (letter === "Backspace" && guesses[currentLine].word.length>=1 && guess.length>=1) {

        for(let j=0; j< answer.length; j++){
          setGuesses([...guesses, guesses[currentLine].colors[j]=""])
        
      }
        setGuesses([...guesses, guesses[currentLine].word = setCharAt(guesses[currentLine].word, position-1," ") ]) ;
        setGuess(guess.slice(0, guess.length-1))
        setPosition(prevPosition=>prevPosition-1)
      } else if (letter === "Enter" && guesses[currentLine].word[4]!==" "){  
        checkLetters(guesses[currentLine].word.toLowerCase() , answer)  
        }
    }


  const checkLetters = (guess,answer)=>{
    let localGuess=guess
    let localAnswer=answer
    let absolutelyRight=0


    if(ValidWords.indexOf(guess)>=0){    
    //Check right letter and right position
    for(let i=0; i< answer.length; i++){
      if(answer[i]===localGuess[i]){
        setGuesses([...guesses, guesses[currentLine].colors[i]="green"])
        localGuess = setCharAt(localGuess,i,"+")
        updateKeyboard(localAnswer[i].toUpperCase(),"green")
        localAnswer = setCharAt(localAnswer,i,"0")
        absolutelyRight +=1
        if(absolutelyRight===5){
          for(let w=0;w<5;w++){
            setGuesses([...guesses, guesses[currentLine].colors[w]="win animate__animated animate__tada"])            
          }  
          setWon(true)
          let stats=localStorage.getItem("Ordle")
          localStorage.setItem("Ordle", [...stats, currentLine+1])        
        }
      }
    }
      //Check right letter, wrong position
      for(let j=0; j< answer.length; j++){
        if(localAnswer.indexOf(localGuess[j])>=0){
          updateKeyboard(localGuess[j].toUpperCase(),"yellow")
          localAnswer=setCharAt(localAnswer, localAnswer.indexOf(localGuess[j]),"-")
          setGuesses([...guesses, guesses[currentLine].colors[j]="yellow"])
          
        } else {
          updateKeyboard(localGuess[j].toUpperCase(),"gray") 
        }
      }
    
    setCurrentLine(currentLine=>currentLine+1)
    if(currentLine===5 && answer!==guess){
      let stats=localStorage.getItem("Ordle")
      localStorage.setItem("Ordle", [...stats,7])
    }
    if (guess!==answer){setGuess("")}
    setPosition(0)
  } else {
    for(let j=0; j< answer.length; j++){
        setGuesses([...guesses, guesses[currentLine].colors[j]="red animate__animated animate__shakeX"])
      
    }

  }
  
  }
  const initialGuesses = [
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
  ]
  const [currentLine, setCurrentLine] = useState(0)
  const [guesses, setGuesses] = useState(initialGuesses)
  
  const handleKeyUp = (e) => {
    let letter = e.key;
    if (letter.length===1){letter=letter.toUpperCase()}
    processLetter(letter)
  };

  // Add the handleKeyUp event listener
  useEffect(() => {
    document.addEventListener('keyup', handleKeyUp, true);

    // Return a cleanup function that will be called when the component is unmounted
    return () => {
      // Remove the handleKeyUp event listener
      document.removeEventListener('keyup', handleKeyUp, true);
    };
    // eslint-disable-next-line
  }, [guess]); // Update the effect when the guess state changes

  const resetGame = ()=>{
    setAnswer(Words[Math.floor(Math.random()*Words.length)]);
    setCurrentLine(0);
    setGuess('');
    console.log(initialGuesses)
    setGuesses(initialGuesses);
    console.log(guesses)
    setPosition(0);
    let newKbLayout=[...kbLayout]
    newKbLayout.forEach(line=>{
      line.forEach(char=>{char.color=''})
    })
    setWon(false)
  }
  return (
    <div className="App">
      {isOpen && <Modal setIsOpen={setIsOpen} />}
      <Header  />
      <Grid currentLine={currentLine} guesses={guesses} />
      <Keyboard layout={kbLayout} processLetter={processLetter}/>
      <h3 className='lost'>{currentLine===6 && won===false?`The answer was: "${answer.toUpperCase()}". Try again?`:''}</h3>
      <h3 className='won'>{won===true?`You won in ${currentLine} guesses! Play again?`:''}</h3>
      {currentLine===6 || won===true ?<button className=" btn btn-outline-warning newGame" onClick={resetGame}>NEW GAME</button>:''}
      
    </div>
  );
}

export default App;

