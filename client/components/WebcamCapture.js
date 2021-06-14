import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Webcam from 'react-webcam'
import {_analysis} from '../store/photo'
import {FiCamera, FiTrash2, FiShare} from 'react-icons/fi'
import {
  ButtonContainer,
  ScreenContainer,
  CameraContainer,
  Icon,
  Tablet,
  MainContainer
} from './styled/WebcamStyles'
import {Toast} from '../components/Toast/toast'
import './Toast/toast.css'

const WebcamCapture = () => {
  const [image, setImage] = useState('')

  const dispatch = useDispatch()

  const webcamRef = React.useRef(null)

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

  const imgError = () => {
    return new Toast({
      message: 'This is a danger message. You can use this for errors etc',
      type: 'danger'
    })
  }

  return (
    <MainContainer error={() => imgError()}>
      <Tablet>
        <ScreenContainer>
          <CameraContainer>
            {!image ? (
              <Webcam
                className="webcam"
                audio={false}
                //height={360}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                screenshotQuality={1}
                //width={640}
                //videoConstraints={videoConstraints}
              />
            ) : (
              <img src={image} />
            )}
          </CameraContainer>
          <ButtonContainer>
            <Icon>
              <FiTrash2
                onClick={e => {
                  e.preventDefault()
                  removeImg()
                }}
              />
            </Icon>
            <Icon>
              <FiCamera
                onClick={e => {
                  e.preventDefault()
                  capture()
                }}
              />
            </Icon>
            <Icon>
              <FiShare
                onClick={e => {
                  e.preventDefault()
                  dispatch(_analysis({image}))
                }}
              />
            </Icon>
          </ButtonContainer>
        </ScreenContainer>
      </Tablet>
    </MainContainer>
  )
}

export default WebcamCapture
