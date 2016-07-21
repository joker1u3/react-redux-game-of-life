import React, { PropTypes } from 'react';
import { UnitStates } from '../constants/ActionTypes';
import classnames from 'classnames';

const Unit = ({ onClick, state, editing }) => (
  <div
    onClick={ onClick }
    className={classnames(
      { young: state === UnitStates.YOUNG },
      { old: state === UnitStates.OLD },
      { dead: state === UnitStates.DEAD },
      'unit'
    )}>
  </div>
)

Unit.propTypes = {
  onClick: PropTypes.func.isRequired,
  state: PropTypes.string.isRequired,
  editing: PropTypes.bool.isRequired
};

export default Unit;
