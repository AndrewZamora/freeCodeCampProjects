import React, { Component } from 'react';

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            unit: this.props.unit,
            max: this.props.max,
            over: false
        };
    }
    inc = () => {
        const integer = this.state.value + 1;
        let newValue = this.state.max;
        if (integer < this.state.max) {
            newValue = integer;
            this.setState(({
                over: false
            }));
        } if (integer > this.state.max) {
            this.setState(({
                over: true
            }));
            newValue = 0;
        }
        this.setState(({ value: newValue }),
            () => { this.props.func(this.state); });
    }
    dec = () => {
        const integer = this.state.value - 1;
        let newValue = this.state.value;
        if (integer < 10 && newValue !== 0) {
            newValue = integer
        }
        if (integer > 9) {
            newValue = integer
        }
        this.setState(({ value: newValue }),
            () => { this.props.func(this.state); });
    }
    render() {
        return (
            <div style={styles.container}>
                <div>{this.props.unit}</div>
                <button onClick={() => this.inc()}>+</button>
                <div style={styles.div}>{this.state.value}</div>
                <button onClick={() => this.dec()}>-</button>
            </div>
        );
    }
}

export default Input;

const styles = {
    div: {
        padding: '0 1em'
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        width: '2em'
    },
}