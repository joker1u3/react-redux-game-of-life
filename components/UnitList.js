import React, { PropTypes } from 'react';
import Unit from './Unit';
import { UnitStates } from '../constants/ActionTypes';

const UnitList = ({ units, editing, actions }) => (
  <div className='matrix'>
    {units.map((unitsColumn, index) =>
      <div className='row' key={ `row_${index}` } >
        {unitsColumn.map((unit, columnIndex) =>
            <Unit
              {...unit}
              key={ `unit_${index}_${columnIndex}` }
              actions={actions}
              onClick={() => actions.updateUnitState(unit.id, UnitStates.YOUNG)}
              disabled={!editing}
            />
        )}
      </div>
    )}
  </div>
)

UnitList.propTypes = {
  actions: PropTypes.object.isRequired,
  units: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        state: PropTypes.string.isRequired
      }).isRequired
    ).isRequired
  ).isRequired
}

export default UnitList;
