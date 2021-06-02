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

const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
`
const SideBarContainer = styled.div`
  display: flex;
`

const MainContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`
const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`
const App = () => {
  const {loading} = useSelector(state => state.photoReducer)
  return (
    <AppContainer>
      <Nav />
      <SideBarContainer>
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
