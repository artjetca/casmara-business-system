import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// 頁面組件
import Login from './pages/Login';
import Clients from './pages/Clients';
import Visits from './pages/Visits';
import Stats from './pages/Stats';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/visits" element={<Visits />} />
        <Route path="/stats" element={<Stats />} />
      </Routes>
    </Router>
  );
}

export default App;