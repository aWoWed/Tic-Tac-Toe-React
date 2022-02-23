interface IGame {
    marks: Array<string>,
    stepNumber: number,
    player: number,
    setMarks: (marks: Array<string>) => any,
    setStepNumber: (stepNumber: number) => any,
    setPlayer: (player: number) => any,
    resetGame: () => any
}

enum GameActionTypes {
    Reset_Game = "Reset_Game",
    Set_Marks = "Set_Marks",
    Set_StepNumber = "Set_StepNumber",
    Set_Player = "Set_Player",
}

interface ResetGameAction {
    type: GameActionTypes.Reset_Game,
}

interface SetMarksAction {
    type: GameActionTypes.Set_Marks,
    payload: Array<string>
}

interface SetStepNumberAction {
    type: GameActionTypes.Set_StepNumber,
    payload: number
}

interface SetPlayerAction {
    type: GameActionTypes.Set_Player,
    payload: number
}

type GameAction = ResetGameAction | SetMarksAction | SetStepNumberAction | SetPlayerAction;

type GameState = {
    marks: Array<string>,
    stepNumber: number,
    player: number,
}

//type DispatchType = (args: GameAction) => Dispatch<GameAction>