import React, { Component } from 'react';
import './App.css';
import Label from './components/Label';
import Clock from './components/Clock';

class App extends Component {
  render() {
    return (
      <div style={styles.container}>
        <Clock status="Work Time"/>
      </div>
    );
  }
}

export default App;

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column'
  }
}