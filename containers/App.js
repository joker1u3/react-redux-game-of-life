import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import UnitList from '../components/UnitList';
import Toolbar from '../components/Toolbar';
import Timer from './Timer';
import * as UnitActions from '../actions';
import { UnitStates } from '../constants/ActionTypes';

export default class App extends Component {
  render() {
    const { visibleUnits, generation, editing, running, actions, toolbarActions } = this.props;
    let app;
    if(running) {
      app = (
        <Timer update={actions.updateUnitsState} updateInterval='200'>
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
        </Timer>
      );
    } else {
      app = (
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
    return app;
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
  running: PropTypes.bool.isRequired,
  actions: PropTypes.object.isRequired,
  toolbarActions: PropTypes.object.isRequired
}

function select(state) {
  return {
    visibleUnits: state.unitList.units,
    generation: state.unitList.generation,
    editing: state.unitList.editing,
    running: state.unitList.running
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
