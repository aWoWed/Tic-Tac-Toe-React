import '../App.css';
import Board from './Board';
import React, { useCallback } from "react";
import { calculateWinner} from "../helpers/calculateWinner";
import { connect } from "react-redux";
import { RootState } from "../redux/rootReducer";
import {resetGame, setMarks, setPlayer, setStepNumber} from "../redux/action";

function Game( {resetGame, marks, player, stepNumber, setMarks, setStepNumber, setPlayer} : IGame ) {
    const winner = calculateWinner(marks);

    const changeMark = useCallback((position: number) => {
        const marksArray = [...marks];

        if (winner || marks[position] !== "")
            return;

        marksArray[position] = player === 1 ? "X" : "O";
        setMarks(marksArray);
        setStepNumber(stepNumber + 1);
        setPlayer(player === 1 ? 2 : 1);
    }, [marks, player, stepNumber, winner]);

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

function mapStateToProps(state: RootState) {
    return {
        marks: state.game.marks,
        stepNumber: state.game.stepNumber,
        player: state.game.player
    }
}

function dispatchToProps(dispatch: any) {
    return {
        resetGame: () => ( dispatch(resetGame()) ),
        setMarks: (marks: string[]) => ( dispatch(setMarks(marks)) ),
        setStepNumber: (stepNumber: number) => ( dispatch(setStepNumber(stepNumber)) ),
        setPlayer: (player: number) => ( dispatch(setPlayer(player)) ),
    }
}

export default connect(mapStateToProps, dispatchToProps)(Game);