import React from "react";
import { connect } from "react-redux";
import { PLAYERS } from "../constants/players";
import { playerSelection } from "../actions/turnActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faTimes } from "@fortawesome/pro-regular-svg-icons"

function getIcon(glyph) {
    switch(glyph) {
        case PLAYERS.X :
            return (<FontAwesomeIcon icon={faTimes} size="4x" />);
        case PLAYERS.O :
            return (<FontAwesomeIcon icon={faCircle} size="3x" />);
        default :
            return null;
    }
}

class CellComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            locked: false,
            glyph: ""
        }
        this.handleTic = this.handleTic.bind(this);
    }

    handleTic() {
        if(!this.state.locked && !this.props.gameover) {
            this.setState({ locked: true, glyph: this.props.player });
            this.props.select(this.props.player, this.props.col, this.props.row);
        }
    }

    render() {
        return (
        <td className={this.props.className} onClick={this.handleTic}>
            {getIcon(this.state.glyph)}
        </td>
        );
    }
}

const mapStateToProps = state => ({
    player: state.appState.playerTurn,
    gameover: state.appState.gameResults.gameover
});

const mapDispatchToProps = dispatch => ({
    select: (player, col, row) => dispatch(playerSelection(player, col, row))
});

const Cell = connect(mapStateToProps, mapDispatchToProps)(CellComponent);

export default Cell;
