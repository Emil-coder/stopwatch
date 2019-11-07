import React, { useState } from 'react';
import './App.css';
import View from './View';
import Model from './Model';
import Intent from './Intent';


const App = () => {

  const [intent, setIntent] = useState('STOP');

  function handleStop() {
    setIntent(Intent.STOP);
  }

  function handleStart() {
    setIntent(Intent.START);
  }

  function handleContinue() {
    setIntent(Intent.CONTINUE);
  }

  function handleReset() {
    setIntent(Intent.RESET);
  }

  return (
    <div className="App">
      <View model={Model(intent)} />
      <button onClick={handleStart}>Start Timer:</button>
      <button onClick={handleStop}>Stop Timer:</button>
      <button onClick={handleContinue}>Continue Timer:</button>
      <button onClick={handleReset}>Reset Timer:</button>
    </div>
  );
}

export default App;
