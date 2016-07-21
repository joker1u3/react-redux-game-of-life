import React, { Component, PropTypes } from 'react';
import Unit from './Unit';
import { UnitStates } from '../constants/ActionTypes';

const UnitList = ({ onUnitClick, units }) => (
  <div className='matrix'>
    {units.map((unitsColumn, index) =>
      <div className='row' key={ `row_${index}` } >
        {unitsColumn.map((unit, columnIndex) =>
            <Unit
              {...unit}
              key={ `unit_${index}_${columnIndex}` }
              onClick={() => onUnitClick(unit.id, UnitStates.YOUNG)}
            />
        )}
      </div>
    )}
  </div>
)

UnitList.propTypes = {
  onUnitClick: PropTypes.func.isRequired,
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
