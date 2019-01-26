import React, { Component } from 'react';
import Input from './Input';
import Label from './Label';

class Clock extends Component {
    render() {
        return (
            <div>
                {this.props.time}
            </div>
        );
    }
}

export default Clock;
