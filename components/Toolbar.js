import React, { PropTypes } from 'react';

const Toolbar = ({ generation, actions }) => (
  <div className='toolbar'>
    <div className='toolbar-item'>Generation: {generation}</div>
    <button className='toolbar-item' onClick={actions.gameInit}>New</button>
    <button className='toolbar-item' onClick={actions.gameStart}>Start</button>
    <button className='toolbar-item' onClick={actions.gameStop}>Stop</button>
  </div>
)

Toolbar.propTypes = {
  actions: PropTypes.object.isRequired
};

export default Toolbar;
