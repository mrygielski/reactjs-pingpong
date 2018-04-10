import React from 'react';

class Results extends React.Component {
    render() {
        return (
            <div className="scores" id="scores">
                <div>Player</div>
                <div id="scorePlayer">{this.props.player}</div>
                <div>:</div>
                <div id="scoreCpu">{this.props.cpu}</div>
                <div>CPU</div>
            </div>
        );
    }
}

export default Results;