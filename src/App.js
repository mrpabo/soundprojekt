import React from 'react';
import './App.scss';
import Osc1 from './components/Osc1';
import Filter from './components/Filter';
import Keyboard from './components/Keyboard';
import ADSR from './components/ADSR';
import DrumMachine from './components/DrumMachine';





function App() {



  return (
    <div className="App">
      <Osc1 />
      <ADSR />
      <Filter />
      <Keyboard />
      <DrumMachine />
    </div>
  );
}

export default App;
