import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {MainContainer} from './styled/HomeStyles'
import SideBar from './SideBar'
import WebcamCapture from './WebcamCapture'
import LoadingSet from './StorySets/LoadingSet'
import YesMask from './StorySets/YesMask'
import NoMask from './StorySets/NoMask'

const Home = () => {
  const [mask, setMask] = useState(false)

  //const dispatch = useDispatch()

  const {labels, loading} = useSelector(state => state.photoReducer)

  return (
    <MainContainer>
      <SideBar />
      {!loading ? <WebcamCapture /> : <LoadingSet />}

      {/* {mask ? <NoMask /> : <YesMask />}
      <LoadingSet /> */}
    </MainContainer>
  )
}

export default Home
