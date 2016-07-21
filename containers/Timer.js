import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class Timer extends React.Component {
  componentDidMount() {
    const { update, updateInterval } = this.props;
    this.interval = setInterval(update.bind(this),  updateInterval || 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { running, children } = this.props;

    return (
      <div>
        {children}
      </div>
    );
  }
}

export default Timer;
