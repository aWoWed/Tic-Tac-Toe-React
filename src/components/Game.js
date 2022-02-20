import '../App.css';
import Board from './Board';
import React, {useState} from "react";
import {calculateWinner} from "../helpers/calculateWinner";

function Game() {
    const [marks, setMarks] = useState(Array(9).fill(""));
    const [stepNumber, setStepNumber] = useState(0);
    const [player, setPlayer] = useState(1);
    const winner = calculateWinner(marks);

    function changeMark (position) {
        const marksArray = [...marks];

        if (winner || marks[position] !== "")
            return;

        marksArray[position] = player === 1 ? "X" : "O";
        setMarks(marksArray);
        const step = stepNumber + 1;
        setStepNumber(step);
        setPlayer(player === 1 ? 2 : 1);
    }

    function restart() {
        setPlayer(1);
        setMarks(Array(9).fill(""));
    }

    return (
        <div className="game">
            <Board marks={marks} changeMark={changeMark}/>
            <div>
                <h3>{winner ? "Result: " + winner : "Next Player: " + player}</h3>
            </div>
            <button id="restart" className="restart-button" onClick={restart}>Restart</button>
        </div>
    );
}

export default Game;
