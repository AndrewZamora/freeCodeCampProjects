import React, { Component } from 'react';
import Input from './Input';

class Clock extends Component {
    render() {
        return (
            <div style={{textAlign:'center'}}>
                {this.props.time}
            </div>
        );
    }
}

export default Clock;
