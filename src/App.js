//import logo from './logo.svg';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import ConnectByLogo from './scripts/ConnectByLogo';
import AnimatedRoutes from './scripts/AnimatedRoutes';
import { useState } from 'react';


function App() {

  //This useState will work inside Home.js and will activate its popUp, but since 
  //ConnectByLogo.js needs to know the state of 'open' (since if it's true it will not
  //activate its own popUp), then I defined it here: 
  const [open, setOpen] = useState(false)

  return (
    <div className="App">
      <BrowserRouter>
        <AnimatedRoutes open={open} setOpen={setOpen}/>
        <ConnectByLogo open={open}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
