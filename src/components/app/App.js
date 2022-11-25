import React, { useState } from 'react'
import palavras from '../../palavras.js'
import Game from '../game';
import Guess from '../guess/index.js';
import Letters from '../letter/index.js';
import './App.css';

function App() {
  const [attempts, setAttempts] = useState(0)
  const [inGame, setInGame] =  useState(false)
  const [word, setWord] =  useState("")
  const [showUnderScore, setShowUnderScore] = useState([])

  function choiceWord(){
    const index = Math.floor(Math.random() * (palavras.length - 1))
    setWord(palavras[index])
    setShowUnderScore(Array(palavras[index].length).fill("_\t"))
  }

  function gameControl(){
    if(inGame){
      setAttempts(0)
      choiceWord()
    }
    else{
      setInGame(true)
      choiceWord()
    } 

  }


  return (
    <div className="App"> 
      <Game
        word = {word}
        attempts={attempts}
        showUnderScore={showUnderScore}
        inGame = {inGame}
        gameControl = {gameControl}
      />

      <Letters 
        word = {word}
        inGame = {inGame}
        attempts={attempts}
        setAttempts = {setAttempts}
        showUnderScore={showUnderScore}
        setShowUnderScore = {setShowUnderScore}
      />
      <Guess />
    </div>
  )
}

export default App;
