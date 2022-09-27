import './App.css';
import Profile from './pages/Home/Profile.js';
import About from "./pages/About/About";
import Navbar from './Component/Navbar/Navbar.js';
import Experience from './pages/Experience/Experience';
import Skills from './pages/Skills/Skills';
import Interest from './pages/Interest/Interest';
import Awards from './pages/Awards/Awards';
import { Route, Routes } from 'react-router-dom';
import React from 'react';

class App extends React.Component{
  render(){
    return <div className='App'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Profile/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/experience" element={<Experience/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/interest" element={<Interest/>}/>
        <Route path="/awards" element={<Awards/>}/>
      </Routes>
    </div>
  }
}
export default App;
