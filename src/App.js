//import logo from './logo.svg';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import ConnectByLogo from './scripts/ConnectByLogo';
import AnimatedRoutes from './scripts/AnimatedRoutes';
import { useState } from 'react';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <AnimatedRoutes /> 
        <ConnectByLogo />  
      </BrowserRouter>
    </div>
  );
}

export default App;
