import React from 'react';

class Menu extends React.Component {
    render() {
        return (
            <div className="menu" id="menu">
                <div className="inner">
                    <button onClick={this.props.gameInit}>Start Game</button>
                </div>
            </div>
        );
    }
}

export default Menu;