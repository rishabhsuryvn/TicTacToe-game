import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import Board from './Board'
import Gameover from './Gameover';
import GameState from './GameState';
import Reset from './Reset';

const winCombo= [
    {combo: [0,1,2], strikeClass: "strike-row-1"},
    {combo: [3,4,5], strikeClass: "strike-row-2"},
    {combo: [6,7,8], strikeClass: "strike-row-3"},
    
    {combo: [0,3,6], strikeClass: "strike-column-1"},
    {combo: [1,4,7], strikeClass: "strike-column-2"},
    {combo: [2,5,8], strikeClass: "strike-column-3"},

    {combo: [0,4,8], strikeClass: "strike-diagonal-1"},
    {combo: [2,5,6], strikeClass: "strike-diagonal-2"},
]

function checkWinner(square,setStrikeClass, setGameState){
  for( const {combo, strikeClass} of winCombo){
    const squareval1 = square[combo[0]];
    const squareval2 = square[combo[1]];
    const squareval3 = square[combo[2]];
  
  if(squareval1 !==null && squareval1 === squareval2 && squareval1 === squareval3){
    setStrikeClass(strikeClass);
    if(squareval1== "X"){
        setGameState(GameState.pXwin);
    }
    else{
        setGameState(GameState.pOwin);
    }
    return;
  }
}

 const allSquareFill = square.every((sq)=> sq!==null);
 if(allSquareFill){
    setGameState(GameState.draw);
 }
}

const Header = () => {
    const [square, setSquare] = useState(Array(9).fill(null));
    const [isTurn, setTurn] = useState(true);
    const [strikeClass, setStrikeClass] = useState();
    const [gameState, setGameState]= useState(GameState.inProgress);

    const handleTurn =(index) =>{
        if(gameState!==GameState.inProgress){
            return;
        }

        if(square[index]!==null){
            return;
        }

      const newsquare = [...square];
      newsquare[index] = isTurn ? "X" : "O";
      setTurn(!isTurn);
      setSquare(newsquare);
    
    };

    const handleRest= ()=>{
        setGameState(GameState.inProgress);
        setSquare(Array(9).fill(null));
        setTurn("X");
        setStrikeClass(null);

    }
    useEffect(() => {
        checkWinner(square, setStrikeClass,setGameState);
      }, [square]);

  return (
    <div className='title'>
    <h1>Tic Tac Toe</h1>
    <h4>Player {isTurn ? "X" : "O"} turn </h4>
    <Board square ={square} 
    onSquareClick= {handleTurn}
        strikeClass ={strikeClass}
    />
    <Gameover gameState={gameState}/>
    <Reset gameState={gameState} onReset ={handleRest}/>
    </div>
    
  )
}

export default Header;
