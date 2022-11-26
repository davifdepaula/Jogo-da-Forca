import React, { useState } from 'react'
import palavras from '../../palavras.js'
import "./game.css"


function Game(props) {
  const {attempts, word, showUnderScore, inGame, gameControl, gameOver} = props

function showString(){
  if(!gameOver){
    return(
      <div className="string">
        {showUnderScore}
      </div>
    )
  }

  else {
    if (attempts === 6){
      console.log(attempts)
      return (
        <div className="red string">
          {showUnderScore}
        </div>
    )
    }
    else {
      console.log(attempts)
      return (
        <div className="green string">
          {showUnderScore}
        </div>
      )
    }
  }
}
  function showImg(){
    if (!inGame){
      return (
          <div className='forca'>
            <img src={`./assets/forca${attempts}.png`} alt="" /> 
            <button onClick = {() => gameControl()}>Escolher Palavra</button>
          </div>
      )}

    else{
        return (
          <div className='forca'>
            <img src={`./assets/forca${attempts}.png`} alt = "img"/>
            <div className='inGame'>
              <button onClick = {() => gameControl()}>Escolher Palavra</button>
              {showString()}
            </div>

          </div>
        )}
  }
  return (
      showImg()
  )
}

export default Game