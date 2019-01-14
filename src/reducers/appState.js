import * as ActionTypes from "../constants/actionTypes";
import { PLAYERS } from "../constants/players";

const initialState = {
    cells: [],
    gameStarted: false,
    playerTurn: PLAYERS.X,
    selections: []
};

export default function appState(state = initialState, action) {
    switch(action.type) {
        case ActionTypes.APPSTATE.GAME_START:
            return { ...state, gameStarted: true };
        case ActionTypes.APPSTATE.PLAYER_SELECTION :
            return { ...state, selections: [...state.selections, action.selection] };
        case ActionTypes.APPSTATE.NEXT_PLAYER:
            return { ...state, playerTurn: action.player}
        default:
            return state;
    }
}