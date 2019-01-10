import React, { Component } from 'react';
import './App.css';
import Label from './components/Label';

class App extends Component {
  render() {
    return (
      <div style={styles.container}>
        <Label id="break-label">Break Length</Label>
        <Label id="session-label">Session Length</Label>
      </div>
    );
  }
}

export default App;

const styles = {
  container:{
    display:'flex',
    flexDirection:'column'
  }
}