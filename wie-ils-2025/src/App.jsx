import React from 'react'
import Home from './components/Home'
import Layout from './components/Layout';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Programs from './components/Programs';
function App() {
  return (
    <> 
  
     <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="programs" element={<Programs />} />
          {/* Add other routes here if needed */}
        </Route>
        {/* Optionally, add a NotFound route here */}
      </Routes>
    </Router>
  
    </>
  )
}

export default App