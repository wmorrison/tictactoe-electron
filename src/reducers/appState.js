import * as ActionTypes from "../constants/actionTypes";
import { PLAYERS } from "../constants/players";

const initialState = {
    gameStarted: false,
    playerTurn: PLAYERS.X,
    selections: [],
    gameResults: {
        gameover: false,
        winner: "",
        cells: []
    }
};

export default function appState(state = initialState, action) {
    switch(action.type) {
        case ActionTypes.APPSTATE.GAME_START:
            return { ...state, gameStarted: true };
        case ActionTypes.APPSTATE.PLAYER_SELECTION :
            return { ...state, selections: [...state.selections, action.selection] };
        case ActionTypes.APPSTATE.NEXT_PLAYER:
            return { ...state, playerTurn: action.player }
        case ActionTypes.APPSTATE.END_GAME:
            return { ...state, gameResults: { ...state.gameResults, gameover: true, winner: action.winner }}
        default:
            return state;
    }
}