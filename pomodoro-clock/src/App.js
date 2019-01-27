import React, { Component } from 'react';
import './App.css';
import Clock from './components/Clock';
import Input from './components/Input';
import Label from './components/Label';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      breakLength: 2,
      sessionLength: 5,
      interval: '',
      switchTime: false,
      timer: 5
    };
  }
  countDown = () => {
    this.setState(({
      timer: this.state.timer -= 1,
    }));
    if (this.state.timer < 0 && !this.state.switchTime) {
      this.setState(({
        timer: this.state.breakLength,
        switchTime: !this.state.switchTime
      }));
    }
    if (this.state.timer < 0 && this.state.switchTime === true) {
      this.setState(({
        timer: this.state.sessionLength,
        switchTime: !this.state.switchTime
      }));
    }
  }
  start = () => {
    this.setState(({
      interval: setInterval(this.countDown, 1000),
      timer: this.state.sessionLength
    }));
  }
  pause = () => {
    clearInterval(this.state.interval);
  }
  handleSessionInput = input => {
    // timer also need to be set so that user can see the change
    this.setState(({
      sessionLength: input.value,
      timer: input.value
    }));
  }
  handleBreakInput = input => {
    this.setState(({
      breakLength: input.value
    }));
  }
  render() {
    return (
      <div style={styles.container}>
        <Clock time={this.state.timer} />
        <div style={styles.inputContainer}>
          <div>
            <Label id={`session-label`}>Session:</Label>
            <Input decId={`session-decrement`} incId={`session-increment`} max={59} unit="min" func={(event) => this.handleSessionInput(event)}></Input>
          </div>
          <div>
            <Label id={`break-label`}>Break:</Label>
            <Input decId={`break-decrement`} incId={`break-increment`} max={59} unit="min" func={(event) => this.handleBreakInput(event)}></Input>
          </div>
        </div>
        <button onClick={() => this.start()}>Start</button>
        <button onClick={() => this.pause()}>Pause</button>
      </div>
    );
  }
}

export default App;

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column'
  },
  inputContainer: {
    display: 'flex'
  }
}