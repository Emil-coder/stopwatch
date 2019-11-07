import React from 'react';
import Model from './Model';

const View = (props) => {

  console.log(props.model);

  let minutes = Math.floor(props.model.time / 60);
  let seconds = props.model.time - (minutes * 60);
  let secondsFormatted = `${seconds < 10 ? '0' : ''}${seconds}`

  return <div id="timer">{minutes}:{secondsFormatted}</div>
}

export default View;