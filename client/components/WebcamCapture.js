import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Webcam from 'react-webcam'
import {_analysis} from '../store/photo'
import {FiCamera, FiTrash2, FiShare} from 'react-icons/fi'
import {
  ButtonContainer,
  MainContainer,
  CameraContainer
} from './styled/WebcamStyles'

const WebcamCapture = () => {
  const [image, setImage] = useState('')
  const [mask, setMask] = useState(false)

  const dispatch = useDispatch()

  const {labels} = useSelector(state => state.photoReducer)

  const webcamRef = React.useRef(null)

  // useEffect(() => {
  //   console.log('image', image)
  // }, [image])

  useEffect(
    () => {
      console.log(labels)
      if (labels.includes('Mask')) {
        setMask(true)
      }
    },
    [labels]
  )

  const capture = React.useCallback(
    () => {
      const imageSrc = webcamRef.current.getScreenshot()
      setImage(imageSrc)
    },
    [webcamRef]
  )

  const removeImg = () => {
    setImage(null)
  }

  return (
    <MainContainer>
      <CameraContainer>
        {!image ? (
          <Webcam
            audio={false}
            height={360}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width={640}
            //videoConstraints={videoConstraints}
          />
        ) : (
          <img src={image} />
        )}
      </CameraContainer>
      <ButtonContainer>
        <FiCamera
          onClick={e => {
            e.preventDefault()
            capture()
          }}
        />
        <FiTrash2
          onClick={e => {
            e.preventDefault()
            removeImg()
          }}
        />
        <FiShare
          onClick={e => {
            e.preventDefault()
            dispatch(_analysis({image}))
          }}
        />
      </ButtonContainer>
    </MainContainer>
  )
}

export default WebcamCapture
