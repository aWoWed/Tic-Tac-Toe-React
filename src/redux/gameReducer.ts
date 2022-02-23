import * as actionTypes from "./types"

const defaultState: GameState = {
    marks: Array<Mark>(9).fill(""),
    stepNumber: 1,
    player: true,
}

export const gameReducer = (state: GameState = defaultState, action: GameAction) => {
    switch (action.type) {
        case actionTypes.Reset_Game:
            return defaultState;
        case actionTypes.Set_Marks:
            return {...state, marks: action.payload}
        case actionTypes.Set_StepNumber:
            return {...state, stepNumber: action.payload}
        case actionTypes.Set_Player:
            return {...state, player: action.payload}
        default:
            return state;
    }
}