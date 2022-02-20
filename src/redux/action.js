import { Reset_Game, Set_Marks, Set_StepNumber, Set_Player } from "./types"

export function resetGame() {
    return {
        type: Reset_Game,
    };
}

export function setMarks(marks) {
    return {
        type: Set_Marks,
        payload: marks
    };
}

export function setStepNumber(stepNumber) {
    return {
        type: Set_StepNumber,
        payload: stepNumber
    };
}

export function setPlayer(player) {
    return {
        type: Set_Player,
        payload: player
    };
}