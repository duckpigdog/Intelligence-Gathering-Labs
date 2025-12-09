import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SourceCode from './pages/levels/SourceCode';
import Robots from './pages/levels/Robots';
import Backup from './pages/levels/Backup';
import Empty from './components/Empty'; // Fallback for locked levels

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/levels/source-code" element={<SourceCode />} />
      <Route path="/levels/robots" element={<Robots />} />
      <Route path="/levels/backup" element={<Backup />} />
      {/* Placeholders for locked levels */}
      <Route path="/levels/dns" element={<Empty />} />
      <Route path="/levels/ports" element={<Empty />} />
    </Routes>
  );
}

export default App;
