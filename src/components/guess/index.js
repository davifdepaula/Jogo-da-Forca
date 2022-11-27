import React, {useState} from 'react'

import "./guess.css"

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
      <div className='kick'>
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
      </div>
    </form>
  )
}

export default Guess