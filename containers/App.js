import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import UnitList from '../components/UnitList';
import { initUnit, updateUnitState, updateUnitsState } from '../actions';
import { UnitStates } from '../constants/ActionTypes';

export default class App extends Component {
  render() {
    const { dispatch, visibleUnits } = this.props;
    return (
      <div>
        <UnitList
          units={this.props.visibleUnits}
          onUnitClick = { id => dispatch(updateUnitState(id, UnitStates.YOUNG)) }
          />
      </div>
    );
  }
}

App.propTypes = {
  visibleUnits: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        state: PropTypes.string.isRequired
      }).isRequired
    ).isRequired
  ).isRequired
}

function select(state) {
  return {
    visibleUnits: state.unitList.units,
  }
}

export default connect(select)(App)
