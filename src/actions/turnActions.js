import * as ActionTypes from "../constants/actionTypes";

export function nextPlayer(player) {
    return {
        type: ActionTypes.APPSTATE.NEXT_PLAYER,
        player
    };
}

export function playerSelection(player, col, row) {
    return {
        type: ActionTypes.APPSTATE.PLAYER_SELECTION,
        selection: { player, col, row }
    };
}