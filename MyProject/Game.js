import React, { useState } from 'react';
import './tic_toc_toe.css'

const Board = ({ squares, onClick }) => {
  const renderSquare = (i) => (
    <button className="cell" onClick={() => onClick(i)}>
      {squares[i]}
    </button>
  );

  return (
    <div className="board">
      <div className="row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

const Game = () => {
  const [squares, setSquares] = useState(Array(9).fill(''));
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);

  const handleClick = (i) => {
    if (winner || squares[i]) return;

    const newSquares = [...squares];
    newSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(newSquares);
    setXIsNext(!xIsNext);

    if (calculateWinner(newSquares)) {
      setWinner(newSquares[i]);
    }
  };

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let [a, b, c] of lines) {
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const status = winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`;

  const resetGame = () => {
    setSquares(Array(9).fill(''));
    setXIsNext(true);
    setWinner(null);
  };

  return (
    <div className='game-container'>
    <div className="Game">
      <h1>Tic Tac Toe</h1>
      <Board squares={squares} onClick={handleClick} />
      <div className="status">{status}</div>
      <button className="reset-button" onClick={resetGame}>Reset Game</button>
    </div>
    </div>
  );
};

export default Game;
