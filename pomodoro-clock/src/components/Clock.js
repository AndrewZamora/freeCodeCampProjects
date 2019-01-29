import React, { Component } from 'react';

class Clock extends Component {
    formatTime = (milSec) => {
       return new Date(milSec).toISOString().substr(14, 5);
    }
    render() {
        return (
            <div style={{ textAlign: 'center' }}>
                {this.formatTime(this.props.time)}
            </div>
        );
    }
}

export default Clock;
