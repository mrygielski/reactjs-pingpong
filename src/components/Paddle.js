import React from 'react';

class PaddleComponent extends React.Component {
  static props = {
    cpu: 1,
    posX: 0,
    posY: 0,
    width: 0,
    height: 0,
    id: ''
  };

  render() {

    var styles = {
      user: {
        left: this.props.posX,
        top: this.props.posY,
        width: this.props.width,
        height: this.props.height,
        backgroundColor: 'red',
        color: 'white',
        position: 'absolute'
      },
      cpu: {
        left: this.props.posX + this.props.width,
        top: this.props.posY,
        width: this.props.width,
        height: this.props.height,
        backgroundColor: 'blue',
        color: 'white',
        position: 'absolute'
      }
    };

    return (
      <div className="paddle" id={this.props.id} style={this.props.cpu == 1 ? styles.cpu : styles.user}></div>
    );
  }
}

export default PaddleComponent;