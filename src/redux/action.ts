import * as actionTypes from "./types"

export function resetGame() {
    return {
        type: actionTypes.Reset_Game,
    };
}

export function setMarks(marks: Array<string>) {
    return {
        type: actionTypes.Set_Marks,
        payload: marks
    };
}

export function setStepNumber(stepNumber: number) {
    return {
        type: actionTypes.Set_StepNumber,
        payload: stepNumber
    };
}

export function setPlayer(player: boolean) {
    return {
        type: actionTypes.Set_Player,
        payload: player
    };
}