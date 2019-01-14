import React from "react";
import Board from "./board.jsx";
const Game = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-8 d-flex align-content-center"><Board/></div>
                <div className="col-4">Next Turn</div>
            </div>
        </div>
    );
}

export default Game;