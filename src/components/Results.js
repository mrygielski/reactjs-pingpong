import React from 'react';

class Results extends React.Component {
    render() {
        return (
            <div className="scores" id="scores">
                <div id="scorePlayer">{this.props.player}</div>
                <div>:</div>
                <div id="scoreCpu">{this.props.cpu}</div>
            </div>
        );
    }
}

export default Results;