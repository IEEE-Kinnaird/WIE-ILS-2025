import React from 'react'
import Home from './components/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Programs from './components/Programs';
function App() {
  return (
    <>
    <Router>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/programs" element={<Programs />} />
    </Routes>
    </Router>
  
  
    </>
  )
}

export default App