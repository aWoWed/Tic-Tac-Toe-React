type Mark = "X" | "O" | "";

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
    payload: Array<Mark>
}

interface SetStepNumberAction {
    type: GameActionTypes.Set_StepNumber,
    payload: number
}

interface SetPlayerAction {
    type: GameActionTypes.Set_Player,
    payload: boolean
}

type GameAction = ResetGameAction | SetMarksAction | SetStepNumberAction | SetPlayerAction;

type GameState = {
    marks: Array<Mark>,
    stepNumber: number,
    player: boolean,
}