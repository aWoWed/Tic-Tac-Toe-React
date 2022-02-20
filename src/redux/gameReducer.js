import { Set_Marks, Set_StepNumber, Set_Player } from "./types"

const defaultState = {
    marks: Array(9).fill(""),
    stepNumber: 0,
    player: 1,
}

export const gameReducer = (state = defaultState, action) => {
    switch (action.type){
        case Set_Marks:
            return { ...state, marks: action.payload }
        case Set_StepNumber:
            return { ...state, stepNumber: action.payload }
        case Set_Player:
            return { ...state, player: action.payload }
        default:
            return state;
    }
}