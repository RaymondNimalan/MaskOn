import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Webcam from 'react-webcam'
import {_analysis} from '../store/photo'

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
    <>
      <Webcam
        audio={false}
        height={360}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={640}
        //videoConstraints={videoConstraints}
      />
      <button
        type="button"
        onClick={e => {
          e.preventDefault()
          capture()
        }}
      >
        Capture photo
      </button>
      <button
        type="button"
        onClick={e => {
          e.preventDefault()
          removeImg()
        }}
      >
        Remove Image
      </button>
      <button
        type="button"
        onClick={e => {
          e.preventDefault()
          dispatch(_analysis({image}))
        }}
      >
        Analyze
      </button>
      <img src={image} />
    </>
  )
}

export default WebcamCapture
