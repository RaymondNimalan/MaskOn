import React from 'react'
import {MainContainer} from './styled/HomeStyles'
import SideBar from './SideBar'
import WebcamCapture from './WebcamCapture'

const Home = () => {
  return (
    <MainContainer>
      <SideBar />
      <WebcamCapture />
    </MainContainer>
  )
}

export default Home
