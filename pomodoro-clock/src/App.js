import React, { Component } from 'react';
import './App.css';
import Clock from './components/Clock';
import Input from './components/Input';
import Label from './components/Label';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      breakLength: 300000,
      sessionLength: 1500000,
      status: "Session",
      interval: '',
      switchTime: false,
      timer: 1500000,
      initialized: false,
      start: false
    };
  }
  countDown = () => {
    this.setState(prevState => ({
      timer: prevState.timer - 1000
    }));
    if (this.state.timer === 0 && !this.state.switchTime) {
      this.setState(({
        timer: this.state.breakLength,
        switchTime: !this.state.switchTime
      }));
    }
    if (this.state.timer === 0 && this.state.switchTime) {
      this.setState(({
        timer: this.state.sessionLength,
        switchTime: !this.state.switchTime
      }));
    }
  }
  start = () => {
    if (!this.state.initialized) {
      this.setState(({
        interval: setInterval(this.countDown, 1000),
        timer: this.state.sessionLength,
        initialized: true,
        start: true
      }));
    } if (this.state.start) {
      clearInterval(this.state.interval)
      this.setState(({
        start: false
      }));
    } if (!this.state.start && this.state.initialized) {
      this.setState(({
        interval: setInterval(this.countDown, 1000),
        start: true
      }));
    }
  }
  pause = () => {
    clearInterval(this.state.interval);
  }
  reset = () => {
    clearInterval(this.state.interval);
    this.setState(({
      interval: '',
      timer: 1500000,
      breakLength: 300000,
      sessionLength: 1500000,
      status: "Session"
    }));
  }
  handleSessionInput = input => {
    // timer also need to be set so that user can see the change
    this.setState(({
      sessionLength: input.value * 60000,
      timer: input.value * 60000
    }));
  }
  handleBreakInput = input => {
    this.setState(({
      breakLength: input.value * 60000
    }));
  }
  increment = length => {
    if (this.state[length] < 3600000) {
      this.setState(prevState => ({
        [length]: prevState[length] + 60000
      }));
    }
  }
  decrement = length => {
    if (this.state[length] > 60000) {
      this.setState(prevState => ({
        [length]: prevState[length] - 60000
      }));
    }
  }
  render() {
    return (
      <div style={styles.container}>
        <h1>Pomodoro Clock</h1>
        <div>
          <p>Status: <span id="timer-label">{this.state.status}</span></p>
          <Clock time={this.state.timer} />
        </div>
        <div>
          <h3 id="break-length">{this.state.breakLength / 60000}</h3>
          <label htmlFor="" id="break-label">Break Length</label>
          <button id="break-decrement" onClick={() => this.decrement("breakLength")}>-</button>
          <button id="break-increment" onClick={() => this.increment("breakLength")}>+</button>
        </div>
        <div>
          <h3 id="session-length">{this.state.sessionLength / 60000}</h3>
          <label htmlFor="" id="session-label">Session Length</label>
          <button id="session-decrement" onClick={() => this.decrement("sessionLength")}>-</button>
          <button id="session-increment" onClick={() => this.increment("sessionLength")}>+</button>
        </div>
        <button id="start_stop" onClick={() => this.start() }> {this.state.start ? "Pause" : "Start"}</button>
        <button id="reset" onClick={() => this.reset()}>Reset</button>
        {/* <Label id={`timer-label`}>Session</Label>
        <Clock time={this.state.timer} />
        <div style={styles.inputContainer}>
          <div>
            <Label id={`session-label`}>Session:</Label>
            <Input decId={`session-decrement`}
              incId={`session-increment`}
              valId={`session-length`}
              default={25}
              max={59}
              unit="min"
              func={(event) => this.handleSessionInput(event)}></Input>
          </div>
          <div>
            <Label id={`break-label`}>Break:</Label>
            <Input decId={`break-decrement`}
              incId={`break-increment`}
              valId={`break-length`}
              default={5}
              max={59}
              unit="min"
              func={(event) => this.handleBreakInput(event)}></Input>
          </div>
        </div>
        <button id="start_stop" onClick={() => this.start()}>Start</button>
        <button onClick={() => this.pause()}>Pause</button>
        <button id="reset" onClick={() => this.reset()}>Reset</button> */}
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