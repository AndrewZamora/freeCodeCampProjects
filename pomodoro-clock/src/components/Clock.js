import React, { Component } from 'react';
import Input from './Input';
import Label from './Label';

class Clock extends Component {
    constructor(props) {
        super(props)
        this.state = {
            time: { hour: 0, min: 0, sec: 0 },
            units: ['hour', 'min', 'sec'],
            interval: ''
        };
    }
    handleInput = input => {
        const { units } = this.state;
        units.forEach(unit => {
            if (input['unit'].includes(unit)) {
                this.setState(({
                    time: {
                        ...this.state.time,
                        [input.unit]: input.value
                    }
                }))
            }
        })
    }
    timer = () => {
        let time = Object.assign({},this.state.time);
        let { hour, min, sec } = time;
        if(hour > 0 && sec < 1 && min < 1){hour -= 1 }
        if (min === 59) { hour -= 1 }
        if (hour === 0 && sec === 0) { min -= 1; }
        if (sec === 0) { sec = 60; }
        sec -= 1;
        if(hour+min+sec=== 0){clearInterval(this.state.interval);}
        this.setState(({
            time: {
                hour: hour,
                min: min,
                sec: sec
            }
        }))
    }
    start = () => {
        this.setState(({
            interval: setInterval(this.timer, 100)
        }))
    }
    pause = () => {
        clearInterval(this.state.interval);
    }
    addZero = i => {
        if (i < 10) { i = "0" + i; }
        return i;
    }
    render() {
        const time = Object.keys(this.state.time).map(i => this.addZero(this.state.time[i]));
        return (
            <div>
                <h2>{this.state.status}</h2>
                <p style={styles.p}>{`${time[0]}:${time[1]}:${time[2]}`}</p>
                <Label id="break-label">Break Length</Label>
                <div style={styles.inputContainer}>
                    <Input max={99} unit="hour" func={(event) => this.handleInput(event)}></Input>
                    <Input max={59} unit="min" func={(event) => this.handleInput(event)}></Input>
                    <Input max={59} unit="sec" func={(event) => this.handleInput(event)}></Input>
                </div>
                <Label id="session-label">Session Length</Label>
                <button onClick={() => this.start()}>Start</button>
                <button onClick={() => this.pause()}>Pause</button>
            </div>
        );
    }
}

export default Clock;

const styles = {
    p: {
        fontSize: '5em'
    },
    inputContainer: {
        display: 'flex',
        justifyContent: 'center'
    }
}
