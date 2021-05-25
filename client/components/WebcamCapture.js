import React, {useState} from 'react'
import Webcam from 'react-webcam'

const WebcamCapture = () => {
  const [src, setSrc] = useState('')

  const webcamRef = React.useRef(null)

  const capture = React.useCallback(
    () => {
      const imageSrc = webcamRef.current.getScreenshot()
      console.log(imageSrc)
      setSrc(imageSrc)
    },
    [webcamRef]
  )

  const removeImg = () => {
    setSrc(null)
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
        type={button}
        onClick={e => {
          e.preventDefault()
          capture()
        }}
      >
        Capture photo
      </button>
      <button
        type={button}
        onClick={e => {
          e.preventDefault()
          removeImg()
        }}
      >
        Remove Image
      </button>
      <img src={src} />
    </>
  )
}

export default WebcamCapture
