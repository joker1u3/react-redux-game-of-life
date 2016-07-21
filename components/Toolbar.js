import React, { PropTypes } from 'react';

const Toolbar = ({ generation, editing, actions }) => (
  <div className='toolbar'>
    <div className='toolbar-item'>Generation: {generation}</div>
    <button className='toolbar-item' onClick={actions.gameInit}>New</button>
    <button className='toolbar-item' onClick={actions.gameStart}>Start</button>
    <button className='toolbar-item' onClick={actions.gameStop}>Stop</button>
    <div className='toolbar-item'>Editing: {editing.toString()}</div>
  </div>
)

Toolbar.propTypes = {
  actions: PropTypes.object.isRequired
};

export default Toolbar;
