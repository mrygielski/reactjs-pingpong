import React from 'react';

class Menu extends React.Component {
    render() {
        return (
            <div className="menu" id="menu">
                <div>PING - PONG GAME</div>
                <div>press</div>
                <div className="btn" onClick={this.props.gameInit}>Start Game</div>
            </div>
        );
    }
}

export default Menu;