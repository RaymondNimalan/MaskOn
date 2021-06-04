import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
//import Home from './components/Home'
import WebcamCapture from './components/WebcamCapture'
import Mask from './components/Mask'
import Nav from './components/Nav'
import About from './components/About'
import SideBar from './components/SideBar'
import Home from './components/Home'
import styled from 'styled-components'
import LoadingSet from './components/StorySets/LoadingSet'
import ParticlesBg from 'particles-bg'
import icon from '../public/images/icon'

const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  //background-color: #deeffe;
  //z-index: -999;
`
const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 350px;
  object-fit: contain;
  //background-color: #f6feaa;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: #f6feaa;
`
const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`
const App = () => {
  const {loading} = useSelector(state => state.photoReducer)

  const config = {
    num: [1, 2],
    rps: 0.1,
    radius: [5, 40],
    life: [1.5, 3],
    v: [1, 2],
    tha: [1, 3],
    alpha: [0.6, 0],
    scale: [0.1, 0.2],
    body: icon,
    position: 'all',
    color: ['random', '#ff0000'],
    cross: 'dead',
    random: 1
  }

  return (
    <AppContainer>
      <Nav />
      <SideBarContainer>
        <ParticlesBg
          type="custom"
          num={1}
          config={config}
          bg={{
            display: 'flex',
            position: 'absolute',
            zIndex: '-2',
            width: '100%'
          }}
        />
        <SideBar />
      </SideBarContainer>
      <MainContainer>
        {loading ? (
          <LoadingContainer>
            <LoadingSet />
          </LoadingContainer>
        ) : (
          <Home />
        )}
      </MainContainer>
    </AppContainer>
  )
}

export default App
