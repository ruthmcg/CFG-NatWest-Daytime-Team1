import React from 'react';
import logo from './images/logo.png'
import Home from './components/Home';


 

import './App.css';

function App() {
return (

    <div className="App">
      <div className='HeaderLogo'>
        <img src={logo} alt="main_logo" ></img>
      </div>
    <Home /> 
    </div>

  );

}

  export default App;