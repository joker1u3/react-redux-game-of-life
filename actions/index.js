import * as types from '../constants/ActionTypes';

export function initUnit() {
  return { type: types.INIT_UNITS }
}

export function updateUnitState(id, state) {
  return { type: types.UPDATE_UNIT_STATE, id, state }
}

export function updateUnitsState() {
  return { type: types.UPDATE_UNITS_STATE }
}

export function gameBegin() {
  return { type: types.GAME_BEGIN }
}

export function gameEnd() {
  return { type: types.GAME_END }
}
