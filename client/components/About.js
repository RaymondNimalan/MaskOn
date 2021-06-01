import React, {useEffect, useState} from 'react'
//import {FiEyeOff, FiEye} from 'react-icons/fi'
import {
  Content,
  HowItWorks,
  Instructions,
  Icon,
  OpenIcon,
  CloseIcon,
  Header
} from './styled/AboutStyles'

const About = () => {
  const [infoToggle, setInfo] = useState(false)
  const [instructionToggle, setInstruct] = useState(false)

  return (
    <Content>
      <HowItWorks>
        <Header>
          <h1>How It Works!</h1>{' '}
          <Icon>
            {infoToggle ? (
              <CloseIcon
                onClick={() => {
                  setInfo(!infoToggle)
                }}
              />
            ) : (
              <OpenIcon
                onClick={() => {
                  setInfo(!infoToggle)
                }}
              />
            )}
          </Icon>
        </Header>
        {infoToggle ? (
          <p>
            This application utilizes the Google Vision API which employs object
            detection through machine learning. A list of detected labels is
            recieved and verified to contain the labels 'mask' or 'personal
            protective equipment'.
          </p>
        ) : (
          <p />
        )}
      </HowItWorks>
      <Instructions>
        <Header>
          <h1>Instructions:</h1>{' '}
          <Icon>
            {instructionToggle ? (
              <CloseIcon
                onClick={() => {
                  setInstruct(!instructionToggle)
                }}
              />
            ) : (
              <OpenIcon
                onClick={() => {
                  setInstruct(!instructionToggle)
                }}
              />
            )}
          </Icon>
        </Header>
        {instructionToggle ? (
          <>
            <p>1. Allow browser to access webcam.</p>
            <p>2. Take a screenshot using the camera button.</p>
            <p>
              3. Send screenshot to the Google Vision API using the upload
              button.
            </p>
            <p>4. Check the results!</p>
          </>
        ) : (
          <p />
        )}
      </Instructions>
    </Content>
  )
}

export default About
