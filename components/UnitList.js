import React, { Component, PropTypes } from 'react';
import Unit from './Unit';
import { UnitStates } from '../constants/ActionTypes';

export default class UnitList extends Component {
  render() {
    return (
      <div className='matrix'>
        {this.props.units.map((unitsColumn, index) =>
          <div className='row' key={ `row_${index}` } >
            {unitsColumn.map((unit, columnIndex) =>
                <Unit
                  {...unit}
                  key={ `unit_${index}_${columnIndex}` }
                  onClick={() => this.props.onUnitClick(unit.id, UnitStates.YOUNG)}
                />
            )}
          </div>
        )}
      </div>
    )
  }
}

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
