import React from 'react';
import './App.scss';
import Osc1 from './components/Osc1';
import Filter from './components/Filter';
import Keyboard from './components/Keyboard';
import ADSR from './components/ADSR';





function App() {



  return (
    <div className="App">
      <h1 className='center'>SOUNDPROJEKT</h1>
      <Osc1 />
      <ADSR />
      <Filter />
      <Keyboard />
    </div>
  );
}

export default App;
