import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import UnitList from '../components/UnitList';
import Toolbar from '../components/Toolbar';
import * as UnitActions from '../actions';
import { UnitStates } from '../constants/ActionTypes';

export default class App extends Component {
  render() {
    const { visibleUnits, generation, editing, actions, toolbarActions } = this.props;
    console.log(editing);
    return (
      <div>
        <Toolbar
          generation={generation}
          actions={toolbarActions}
          editing={editing}
          />
        <UnitList
          units={visibleUnits}
          editing={editing}
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
  editing: PropTypes.bool.isRequired,
  actions: PropTypes.object.isRequired,
  toolbarActions: PropTypes.object.isRequired
}

function select(state) {
  return {
    visibleUnits: state.unitList.units,
    generation: state.unitList.generation,
    editing: state.unitList.editing
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(UnitActions, dispatch),
    toolbarActions: bindActionCreators({
      gameInit: UnitActions.gameInit,
      gameStart: UnitActions.gameStart,
      gameStop: UnitActions.gameStop
    }, dispatch)
  }
}

export default connect(select, mapDispatchToProps)(App);
