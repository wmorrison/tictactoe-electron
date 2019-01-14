import * as ActionTypes from "../constants/actionTypes";

export function startGame() {
    return {
        type: ActionTypes.APPSTATE.GAME_START
    }
}