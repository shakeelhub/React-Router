import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import All from './pages/All';
import FullStack from './pages/FullStack';
import DataScience from './pages/DataScience';
import CyberSecurity from './pages/Cyber';
import Career from './pages/Career';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import headerImage from './assets/header.png';


const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <img className='main-img' src={headerImage} alt=''/>
        <Navigation />
        <Routes>
          <Route path="/" element={<All />} />
          <Route path="/fullstack" element={<FullStack />} />
          <Route path="/datascience" element={<DataScience />} />
          <Route path="/cybersecurity" element={<CyberSecurity />} />
          <Route path="/career" element={<Career />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;

