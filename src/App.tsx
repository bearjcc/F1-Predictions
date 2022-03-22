import React from 'react';
import './App.css';
import { Tabs } from './components/Tabs';

function App() {
  return (
    <div className="App">
      <Tabs>
        <div id="tab1">test 1</div>
        <div id="tab2">test 2</div>
        <div id="tab3">test 3</div>
      </Tabs>
    </div>
  );
}

export default App;
