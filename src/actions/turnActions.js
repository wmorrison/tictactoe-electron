import * as ActionTypes from "../constants/actionTypes";
import { PLAYERS } from "../constants/players";
import { resolve } from "q";

function nextPlayer(player) {
    return {
        type: ActionTypes.APPSTATE.NEXT_PLAYER,
        player
    };
}

function makeSelection(player, col, row) {
    return {
        type: ActionTypes.APPSTATE.PLAYER_SELECTION,
        selection: { player, col, row }
    };
}

function getNextPlayer(player) {
    return player === PLAYERS.X ? PLAYERS.O : PLAYERS.X;
}

function checkPlayerSelections(player, selections) {
    return new Promise((resolve, reject) => {
        let result = {
            winner: "",
            gameover: false
        };
        let playerSelections = selections.filter(s => s.player === player)
        let cols ={};
        let rows = {};
        const forwardDiagonal = ["13", "22", "31"];
        const backwardDiagonal = ["11","22","33"];
        let hasForwardDiagonal = true;
        let hasBackwardDiagonal = true;


        playerSelections.forEach(ps => {
            cols[ps.col] = cols[ps.col] ? cols[ps.col] + 1 : 1;
            rows[ps.row] = rows[ps.row] ? rows[ps.row] + 1 : 1;
        });
        forwardDiagonal.forEach(diag => {
            if(!playerSelections.find(ps => {
                return `${ps.row}${ps.col}` === diag;
            }))  {
                hasForwardDiagonal = false;
            }
        });
        backwardDiagonal.forEach(diag => {
            if(!playerSelections.find(ps => {
                return `${ps.row}${ps.col}` === diag;
            }))  {
                hasBackwardDiagonal = false;
            }
        });

        if (Object.values(cols).find(value => value === 3)
            || Object.values(rows).find(value => value === 3)
            || hasBackwardDiagonal
            || hasForwardDiagonal) {
            result = {
                gameover: true,
                winner: player
            }
        }
        
        resolve(result);
    });
}

function determineWinner(state) {
    return new Promise((resolve, reject) => {
        let result = {
            gameover: false,
            nextPlayer: getNextPlayer(state.appState.playerTurn),
            winner: ""
        }
        const { playerTurn, selections } = state.appState;

        checkPlayerSelections(playerTurn, selections).then(data => {
            if (data.gameover) {
                result.winner = data.winner;
                result.gameover = true;
            }
        });

        resolve(result);
    })
    
}

function endGame(winner) {
    return {
        type: ActionTypes.APPSTATE.END_GAME,
        winner
    }
}

export const playerSelection = (player, col, row) => (
    (dispatch, getState) => {
        dispatch(makeSelection(player, col, row));
        return determineWinner(getState()).then(result => {
            if (result.gameover) {
                dispatch(endGame(result.winner));
            }
            else {
                dispatch(nextPlayer(result.nextPlayer));
            }
        });        
    }
);