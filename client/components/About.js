import React from 'react'
import {Content, HowItWorks, Instructions} from './styled/AboutStyles'
import {FiEyeOff, FiEye} from 'react-icons/fi'

const About = () => {
  return (
    <Content>
      <HowItWorks>
        <h1>How It Works!</h1> <FiEyeOff />
        <p>
          This application utilizes the Google Vision API which employs object
          detection through machine learning. A list of detected labels is
          recieved and verified to contain the labels 'mask' or 'personal
          protective equipment'.
        </p>
      </HowItWorks>
      <Instructions>
        <h1>Instructions:</h1> <FiEye />
        <p>1. Allow browser to access webcam.</p>
        <p>2. Take a screenshot using the camera button.</p>
        <p>
          3. Send screenshot to the Google Vision API using the upload button.
        </p>
        <p>4. Check the results!</p>
      </Instructions>
    </Content>
  )
}

export default About
