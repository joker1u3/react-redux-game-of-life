import * as types from '../constants/ActionTypes';

export function addUnit() {
  return { type: types.ADD_UNIT }
}

export function makeUnitLive(id) {
  return { type: types.MAKE_UNIT_LIVE, id }
}

export function makeUnitGrow(id) {
  return { type: types.MAKE_UNIT_GROW, id }
}

export function makeUnitDie(id) {
  return { type: types.MAKE_UNIT_DIE, id }
}
