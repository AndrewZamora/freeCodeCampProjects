import React, { Component } from 'react';
import Input from './Input';
import Label from './Label';

class Clock extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hour: '00',
            min: '00',
            sec: '00',
            time: { hour: 0, min: 0, sec: 0 }
        };
    }
    handleInput = input => {
        const addZero = i => {
            if (i < 10) { i = "0" + i; }
            return i;
        }
        const units = ['hour', 'min', 'sec'];
        units.forEach(unit => {
            if (input['unit'].includes(unit)) {
                let paddedValue = addZero(input.value);
                this.setState(({
                    [input.unit]: paddedValue,
                    time: {
                        ...this.state.time,
                        [input.unit]: input.value
                    }
                }))
            }
        })
    }
    countDown = () => {
        let hour = this.state.time.hour;
        let min = this.state.time.min;
        let sec = this.state.time.sec;
        if(hour > 0 && min=== 59 ){
            hour -= 1
        }
        if (sec === 59) {
            min -= 1;
        }
        if (sec === 0) {
            sec = 60;
         }
        sec -= 1;
        this.setState(({
            time:{
                hour: hour,
                min:min,
                sec:sec
            }
        }), console.log(this.state.time))
    }
    render() {
        const { status, hour, min, sec } = this.state;
        return (
            <div>
                <h2>{status}</h2>
                <p style={styles.p}>{`${hour}:${min}:${sec}`}</p>
                <Label id="break-label">Break Length</Label>
                <div style={styles.inputContainer}>
                    <Input max={99} unit="hour" func={(event) => this.handleInput(event)}></Input>
                    <Input max={59} unit="min" func={(event) => this.handleInput(event)}></Input>
                    <Input max={59} unit="sec" func={(event) => this.handleInput(event)}></Input>
                </div>
                <Label id="session-label">Session Length</Label>
                <button onClick={() => this.countDown()}>Start</button>
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
