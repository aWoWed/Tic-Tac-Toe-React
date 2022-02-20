import '../App.css';
import Board from './Board';
import React from "react";
import {calculateWinner} from "../helpers/calculateWinner";
import { connect } from "react-redux";
import {resetGame, setMarks, setPlayer, setStepNumber} from "../redux/action";

function Game( {resetGame, marks, player, stepNumber, setMarks, setStepNumber, setPlayer} ) {
    const winner = calculateWinner(marks);

    function changeMark (position) {
        const marksArray = [...marks];

        if (winner || marks[position] !== "")
            return;

        marksArray[position] = player === 1 ? "X" : "O";
        setMarks(marksArray);
        setStepNumber(stepNumber + 1);
        setPlayer(player === 1 ? 2 : 1);
    }

    function restart() {
        resetGame();
    }

    return (
        <div className="game">
            <Board marks={marks} changeMark={changeMark}/>
            <div>
                <p>Turn: {stepNumber}</p>
            </div>
            <div>
                <h3>{winner ? "Result: " + winner : "Next Player: " + player}</h3>
            </div>
            <button id="restart" className="restart-button" onClick={restart}>Restart</button>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        marks: state.game.marks,
        stepNumber: state.game.stepNumber,
        player: state.game.player
    }
}

function dispatchToProps(dispatch) {
    return {
        resetGame: () => { dispatch(resetGame()) },
        setMarks: (marks) => { dispatch(setMarks(marks)); },
        setStepNumber: (stepNumber) => { dispatch(setStepNumber(stepNumber)) },
        setPlayer: (player) => { dispatch(setPlayer(player)) },
    }
}


export default connect(mapStateToProps, dispatchToProps)(Game);
