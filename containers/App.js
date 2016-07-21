import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import UnitList from '../components/UnitList';
import * as UnitActions from '../actions';
import { UnitStates } from '../constants/ActionTypes';

export default class App extends Component {
  render() {
    const { visibleUnits, actions } = this.props;
    return (
      <div>
        <UnitList
          units={this.props.visibleUnits}
          actions={actions}
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

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(UnitActions, dispatch)
  }
}

export default connect(select, mapDispatchToProps)(App);
