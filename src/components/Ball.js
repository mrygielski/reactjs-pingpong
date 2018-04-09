import React from 'react';

class BallComponent extends React.Component {
  render() {
    var styles = {
      left: this.props.posX,
      top: this.props.posY,
      width: this.props.size,
      height: this.props.size,
      backgroundColor: 'pink',
      borderRadius: '50%',
      position: 'absolute'
    };

    return (
        <div className="ball" id="ball" style={styles}></div>
    );
  }
}

export default BallComponent;