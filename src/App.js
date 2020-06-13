import React from 'react';
import './App.css';
import Info from './info';
import Hobby from "./hobbies";

function App() {
  return (
    <div>
      <p>Hi here,</p>
      <Info/>
      <Hobby hobby="Programming"/>
    </div>
    
  );
}

export default App;
