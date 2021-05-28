import React from 'react'
//import Home from './components/Home'
import WebcamCapture from './components/WebcamCapture'
import Mask from './components/Mask'
import Nav from './components/Nav'
import About from './components/About'
import SideBar from './components/SideBar'
import Home from './components/Home'

const App = () => {
  return (
    <div>
      <Nav />
      <Home />

      <Mask />
      {/* <About /> */}
    </div>
  )
}

export default App
