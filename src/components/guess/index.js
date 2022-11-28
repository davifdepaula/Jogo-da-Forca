import React, {useState} from 'react'
import { Container } from './styles.js'
import "./styles.js"

function Guess(props) {
  const {word, setAttempts, kick, setKick, setShowUnderScore, inGame, gameOver, setGameOver } = props
  function stateControl(){
    setShowUnderScore(word)
    setGameOver(true)
    setKick("")
  }
  
  function handleSubmit(e) {
    e.preventDefault()
    if (kick === word){
      stateControl()
    }
    else {
      setAttempts(6)
      stateControl()
    }

  }
  return (
    <form onSubmit={handleSubmit}>
      <Container>
        Já sei a palavra! 
        <input
        disabled = {!inGame || gameOver}
        name="kick" type="text" value={kick} onChange={(e) => setKick(e.target.value)}
        data-test="guess-input"
        />
        <button
        disabled = {!inGame || gameOver} 
        type="submit" 
        data-test="guess-button">Chutar</button>
      </Container>
    </form>
  )
}

export default Guess