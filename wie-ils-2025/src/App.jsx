import React from 'react'
import ILSSpeakers from './components/ILSSpeakers'
import Sponsors from './components/Sponsers'
import Teams from './components/Teams'
import ContactUs from './components/ContactUs'

function App() {
  return (
    <>
    {/* Star Background */}
    <div id="stars"></div>
    <div id="stars2"></div>
    <div id="stars3"></div>
    <ILSSpeakers/>
    <Sponsors/>
    <Teams/>
    <ContactUs/>
    </>
  )
}

export default App