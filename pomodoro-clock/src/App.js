import React, { Component } from 'react';
import './App.css';
import Clock from './components/Clock';

class App extends Component {
  constructor(props) {
    super(props);
    this.beep = React.createRef();
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
      this.beep.current.play();
      this.setState(({
        timer: this.state.breakLength,
        switchTime: !this.state.switchTime,
        status: "Break"
      }));
    }
    if (this.state.timer === 0 && this.state.switchTime) {
      this.beep.current.play();
      this.setState(({
        timer: this.state.sessionLength,
        switchTime: !this.state.switchTime,
        status: "Session"
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
  reset = () => {
    clearInterval(this.state.interval);
    this.setState(({
      interval: '',
      timer: 1500000,
      breakLength: 300000,
      sessionLength: 1500000,
      status: "Session",
      initialized: false,
      start: false
    }));
  }
  increment = length => {
    if (this.state[length] < 3600000) {
      this.setState(prevState => ({
        [length]: prevState[length] + 60000,
        timer: length === "sessionLength" ?  prevState[length] + 60000 : prevState.timer
      }));
    }
  }
  decrement = length => {
    if (this.state[length] > 60000) {
      this.setState(prevState => ({
        [length]: prevState[length] - 60000,
        timer: length === "sessionLength" ?  prevState[length] - 60000 : prevState.timer
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
        <button id="start_stop" onClick={() => this.start()}> {this.state.start ? "Pause" : "Start"}</button>
        <button id="reset" onClick={() => this.reset()}>Reset</button>
        <audio ref={this.beep} id="beep" src="https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3"/>
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