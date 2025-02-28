
import Home from './components/Home'
import Layout from './components/Layout';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Programs from './components/Programs';
import Speakers from './components/Speakers';
import Sponsors from './components/Sponsors';
import Teams from './components/Teams';
import ContactUs from './components/ContactUs'
import Comingsoon from './components/comingsoon';

function App() {
  return (
    <>

     <Router basename="/WIE">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/programs" element={<Programs />} />
    <Route path="/speakers" element={<Speakers/>} />
    <Route path="/sponsors" element={<Sponsors/>} />
    <Route path="/teams" element={<Teams/>} />
    <Route path="/contact" element={<ContactUs/>} />
    <Route path="/comingsoon" element={<Comingsoon/>} />
          {/* Add other routes here if needed */}
        </Route>
        {/* Optionally, add a NotFound route here */}
      </Routes>
    </Router>
  
    </>
  )
}

export default App