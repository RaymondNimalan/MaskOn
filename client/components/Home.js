import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {
  MainContainer,
  CameraContainer,
  ResultsContainer,
  LoadingContainer
} from './styled/HomeStyles'
import WebcamCapture from './WebcamCapture'
import LoadingSet from './StorySets/LoadingSet'
import YesMask from './StorySets/YesMask'
import NoMask from './StorySets/NoMask'

const Home = () => {
  const [mask, setMask] = useState(false)

  //const dispatch = useDispatch()

  const {labels, loading} = useSelector(state => state.photoReducer)

  const toggle = useSelector(state => state.toggleReducer)

  useEffect(
    () => {
      console.log('toggle', toggle)
    },
    [toggle]
  )

  useEffect(
    () => {
      console.log(labels)
      if (labels.includes('Beard')) {
        setMask(true)
      } else {
        setMask(false)
      }
    },
    [labels]
  )

  return (
    <MainContainer>
      {!toggle ? (
        <CameraContainer>
          <WebcamCapture />
        </CameraContainer>
      ) : (
        <h1>RESULTS</h1>
      )}
    </MainContainer>
  )

  // if (toggle) {
  //   return (
  //     <MainContainer>
  //       {loading ? <WebcamCapture /> : <LoadingSet />}
  //       <CameraContainer></CameraContainer>
  //     </MainContainer>
  //   )
  // } else {
  //   return (
  //     <MainContainer>
  //       <ResultsContainer>{mask ? <YesMask /> : <NoMask />}</ResultsContainer>
  //     </MainContainer>
  //   )
  // }
}

export default Home
