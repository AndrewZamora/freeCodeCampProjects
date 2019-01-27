import React, { Component } from 'react';
import Input from './Input';

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
