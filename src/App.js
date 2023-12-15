import React from "react";
import logo from "./images/logo.png";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutPage";
import ResourcesPage from "./pages/ResourcesPage";
import PageNotFound from "./pages/PageNotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
  
      <div className="App">
        <div className='HeaderLogo'>
          <img src={logo} alt="main_logo" ></img>
        </div>
      <BrowserRouter>
            <Routes>
              <Route path="/" index element={<HomePage />} />
              <Route path="/home" index element={<HomePage />} />
              <Route path="/aboutus" element={<AboutUsPage />} />
              <Route path="/resources" element={<ResourcesPage />} />
              <Route path='*' element={< PageNotFound />} />
            </Routes>
          </BrowserRouter>
      </div>
  
    );
  
  }
  
export default App;
