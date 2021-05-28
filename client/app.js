import React from 'react'
//import Home from './components/Home'
import WebcamCapture from './components/WebcamCapture'
import Mask from './components/Mask'
import Nav from './components/Nav'
import About from './components/About'

const App = () => {
  return (
    <div>
      <Nav />
      <WebcamCapture />
      <Mask />
      <About />
    </div>
  )
}

export default App
