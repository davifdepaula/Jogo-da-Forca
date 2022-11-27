import React, {useState} from 'react'

import "./guess.css"

function Guess(props) {
  const {word, setAttempts, setShowUnderScore, inGame, gameOver, setGameOver } = props
  const [kick, setKick] = useState("")
  console.log(word)
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
    <div className='kick'>
      <form onSubmit={handleSubmit}>
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
      </form>
    </div>
  )
}

export default Guess