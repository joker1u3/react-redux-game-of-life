import { INIT_UNITS, UPDATE_UNIT_STATE, UPDATE_UNITS_STATE, GAME_START, GAME_STOP, UnitStates } from '../constants/ActionTypes';

const initialState = {
  units: initUnits(),
  generation: 1,
  editing: true,
  running: false
}

function initUnits() {
  let count = 35, units = [];
  let maxId = 0;
  for (let i = 0; i < count; i++) {
    let unitsColumn = [];
    for (let j = 0; j < count; j++) {
      unitsColumn.push({
        id: maxId++,
        state: UnitStates.DEAD
      });
    }
    units.push(unitsColumn);
  }
  return units;
};


export default function gameOfLifeApp (state = initialState, action) {
  switch (action.type) {
    case INIT_UNITS:
      return Object.assign({}, state, initialState);
    case UPDATE_UNITS_STATE:
      return Object.assign(
        {},
        state,
        {
          generation: state.generation + 1
        }
      );
    case UPDATE_UNIT_STATE:
      let s =  state.units.map(unitRow => {
        let nextUnitRow = unitRow.map(unit => {
          return unit.id === action.id ?
            Object.assign({}, unit, { state: action.state }) :
            unit
          }
        )
        return Object.assign([], unitRow, nextUnitRow);
      });
      return Object.assign({}, state, {units:s});
    case GAME_START:
      return Object.assign(
        {},
        state,
        {
          running: true,
          editing: false
        }
      );
    case GAME_STOP:
      return Object.assign(
        {},
        state,
        {
          running: false,
          editing: true
        }
      );
    default:
      return state;
  }
}
