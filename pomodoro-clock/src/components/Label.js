import React, { Component } from 'react';

class Label extends Component {
  render() {
    return (
      <div id={this.props.id}>
        {this.props.children}
      </div>
    );
  }
}

export default Label;
