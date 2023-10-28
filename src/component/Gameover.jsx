import React from 'react'
import GameState from './GameState'

function Gameover({gameState}){
    switch(gameState){
        case GameState.inProgress:
            return <></>;
        case GameState.pOwin:
            return <div className='game-over'>O wins</div>;
        case GameState.pXwin:
             return <div className='game-over'>X wins</div>;
        case GameState.draw:
             return <div className='game-over'>Draw</div> 
        default:
            return <></>;
    }
}

export default Gameover;