import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import UnitList from '../components/UnitList';
import Toolbar from '../components/Toolbar';
import * as UnitActions from '../actions';
import { UnitStates } from '../constants/ActionTypes';

export default class App extends Component {
  render() {
    const { visibleUnits, generation, actions, toolbarActions } = this.props;
    return (
      <div>
        <Toolbar
          generation={generation}
          actions={toolbarActions}
          />
        <UnitList
          units={visibleUnits}
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
  ).isRequired,
  generation: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired,
  toolbarActions: PropTypes.object.isRequired
}

function select(state) {
  return {
    visibleUnits: state.unitList.units,
    generation: state.unitList.generation
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(UnitActions, dispatch),
    toolbarActions: bindActionCreators({
      gameInit: UnitActions.gameInit,
      gameStart: UnitActions.gameStart,
      gameStio: UnitActions.gameStop
    }, dispatch)
  }
}

export default connect(select, mapDispatchToProps)(App);
