import * as types from '../constants/ActionTypes';

export function initUnits() {
  return { type: types.INIT_UNITS }
}

export function updateUnitState(id, state) {
  return { type: types.UPDATE_UNIT_STATE, id, state }
}

export function updateUnitsState() {
  return { type: types.UPDATE_UNITS_STATE }
}

export function gameInit() {
  return { type: types.INIT_UNITS }
}

export function gameStart() {
  return { type: types.GAME_START }
}

export function gameStop() {
  return { type: types.GAME_STOP }
}
