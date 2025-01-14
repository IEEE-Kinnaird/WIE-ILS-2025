
import Home from './components/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Programs from './components/Programs';
import Speakers from './components/Speakers';
import Sponsors from './components/Sponsors';
import Teams from './components/Teams';
import ContactUs from './components/ContactUs'

function App() {
  return (
    <>
    <Router>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/programs" element={<Programs />} />
    <Route path="/speakers" element={<Speakers/>} />
    <Route path="/sponsors" element={<Sponsors/>} />
    <Route path="/teams" element={<Teams/>} />
    <Route path="/contact" element={<ContactUs/>} />
    </Routes>
    </Router>
  
  
    </>
  )
}

export default App