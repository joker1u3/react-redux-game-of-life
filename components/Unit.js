import React, { Component, PropTypes } from 'react';
import { UnitStates } from '../constants/ActionTypes';
import classnames from 'classnames';

export default class Unit extends Component {
  constructor(props, context) {
    super(props);
    this.state = {
      editing: true
    }
  }

  render() {
    const unit = this.props;
    return (
      <div
        onClick={ this.props.onClick }
        className={classnames(
          { young: unit.state === UnitStates.YOUNG },
          { old: unit.state === UnitStates.OLD },
          { dead: unit.state === UnitStates.DEAD },
          'unit'
        )}>
      </div>
    );
  }
}

Unit.propTypes = {
  onClick: PropTypes.func.isRequired,
  state: PropTypes.string.isRequired,
  editing: PropTypes.bool.isRequired
};
