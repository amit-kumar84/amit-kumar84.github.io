import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
