import '../App.css';
import Board from './Board';
import React, {useCallback} from "react";
import {calculateWinner} from "../helpers/calculateWinner";
import {connect} from "react-redux";
import {RootState} from "../redux/rootReducer";
import {resetGame, setMarks, setPlayer, setStepNumber} from "../redux/action";

interface IGameProps {
    marks: Array<Mark>,
    stepNumber: number,
    player: boolean,
    setMarks: (marks: Array<Mark>) => any,
    setStepNumber: (stepNumber: number) => any,
    setPlayer: (player: boolean) => any,
    resetGame: () => any
}

function Game({resetGame, marks, player, stepNumber, setMarks, setStepNumber, setPlayer}: IGameProps) {
    const winner = calculateWinner(marks);

    const changeMark = useCallback((position: number) => {
        const marksArray = [...marks];

        if (winner || marks[position] !== "")
            return;

        marksArray[position] = player ? "X" : "O";
        setMarks(marksArray);
        setStepNumber(stepNumber + 1);
        setPlayer(!player);
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
                <h3>{winner ? "Result: " + winner : "Next Player: " + (player ? "X" : "O")}</h3>
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
        resetGame: () => (dispatch(resetGame())),
        setMarks: (marks: Array<Mark>) => (dispatch(setMarks(marks))),
        setStepNumber: (stepNumber: number) => (dispatch(setStepNumber(stepNumber))),
        setPlayer: (player: boolean) => (dispatch(setPlayer(player))),
    }
}

export default connect(mapStateToProps, dispatchToProps)(Game);