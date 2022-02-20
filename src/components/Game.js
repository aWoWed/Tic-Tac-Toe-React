import '../App.css';
import Board from './Board';
import React from "react";
import {calculateWinner} from "../helpers/calculateWinner";
import { connect } from "react-redux";
import {Set_Marks, Set_StepNumber, Set_Player} from "../redux/types";

function Game( {marks, player, stepNumber, setMarks, setStepNumber, setPlayer} ) {
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
        setPlayer(1);
        setMarks(Array(9).fill(""));
        setStepNumber(0);
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
        setMarks: (marks) => {
            dispatch(
                {
                    type: Set_Marks,
                    payload: marks
                });
        },
        setStepNumber: (stepNumber) => {
            dispatch(
                {
                    type: Set_StepNumber,
                    payload: stepNumber
                });
        },
        setPlayer: (player) => {
            dispatch(
                {
                    type: Set_Player,
                    payload: player
                });
        },
    }
}


export default connect(mapStateToProps, dispatchToProps)(Game);
