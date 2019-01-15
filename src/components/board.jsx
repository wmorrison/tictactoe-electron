import React from "react";
import CellComponent from "./cell.jsx";
import "./board.css";

const BoardComponent = () => {
    return (
        <table>
            <tbody>
                <tr>
                    <CellComponent col={1} row={1} />
                    <CellComponent col={2} row={1} className="vert" />
                    <CellComponent col={3} row={1} />
                </tr>
                <tr>
                    <CellComponent col={1} row={2} className="hori" />
                    <CellComponent col={2} row={2} className="vert hori" />
                    <CellComponent col={3} row={2} className="hori" />
                </tr>
                <tr>
                    <CellComponent col={1} row={3} />
                    <CellComponent col={2} row={3} className="vert" />
                    <CellComponent col={3} row={3} />
                </tr>
            </tbody>
        </table>
    );
}

export default BoardComponent;