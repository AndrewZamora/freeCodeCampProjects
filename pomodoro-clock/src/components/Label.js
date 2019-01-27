import React, { Component } from 'react';

class Label extends Component {
  render() {
    return (
      <div id={this.props.id} style={styles.container}>
        {this.props.children}
      </div>
    );
  }
}

export default Label;

const styles = {
  container: {
     textAlign:'center'
  }
}
