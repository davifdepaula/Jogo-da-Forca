import React, { useState } from 'react'
import palavras from '../../palavras.js'
import Game from '../game';
import Guess from '../guess/index.js';
import Letters from '../letter/index.js';
import './App.css';

function App() {
  const [attempts, setAttempts] = useState(0)
  const [inGame, setInGame] =  useState(false)
  const [gameOver, setGameOver] = useState(false)
  const [word, setWord] =  useState("")
  const [showUnderScore, setShowUnderScore] = useState([])
  const [isClicked, setIsClicked] = useState([])

  function choiceWord(){
    const index = Math.floor(Math.random() * (palavras.length - 1))
    setWord(palavras[index])
    setShowUnderScore(Array(palavras[index].length).fill("_\t"))
  }

  function resetStatus(){
    setAttempts(0)
    setIsClicked([])
    setGameOver(false)
    choiceWord()
  }

  function gameControl(){
    if(inGame){
      resetStatus()
    }
    else{
      setInGame(true)
      resetStatus()
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
        gameOver = {gameOver}
        isClicked = {isClicked}
        setIsClicked = {setIsClicked}
      />

      <Letters 
        word = {word}
        inGame = {inGame}
        setInGame = {setInGame}
        gameOver = {gameOver}
        setGameOver = {setGameOver}
        attempts={attempts}
        setAttempts = {setAttempts}
        showUnderScore={showUnderScore}
        setShowUnderScore = {setShowUnderScore}
        isClicked = {isClicked}
        setIsClicked = {setIsClicked}
      />
      <Guess
      word = {word}
      setAttempts = {setAttempts}
      inGame = {inGame}
      gameOver = {gameOver}
      setGameOver = {setGameOver}
      setShowUnderScore = {setShowUnderScore}
       />
    </div>
  )
}

export default App;



