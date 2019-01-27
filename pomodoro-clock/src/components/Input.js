import React, { Component } from 'react';

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.default,
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
            <div>
                <div style={styles.container}>
                    <button id={this.props.incId} onClick={() => this.inc()}>+</button>
                    <div id={this.props.valId} style={styles.value}>{this.state.value}</div>
                    <button id={this.props.decId} onClick={() => this.dec()}>-</button>
                </div>
                <div style={styles.unit}>{this.props.unit}</div>
            </div>
        );
    }
}

export default Input;

const styles = {
    value: {
        padding: '0 1em'
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    unit: {
        textAlign: 'center'
    }
}