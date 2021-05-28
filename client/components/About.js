import React from 'react'

const About = () => {
  return (
    <div>
      <h1>How It Works!</h1>
      <p>
        This application utilizes the Google Vision API which can detect
        different objects within an image. A list of labels is sent back and
        verified to contain the labels 'mask' or 'personal protective
        equipment'.
      </p>

      <h1>Instructions:</h1>
      <ol>
        <li>1. Allow browser to access webcam.</li>
        <li>2. Take a screenshot using the camera button.</li>
        <li>
          3. Send screenshot to the Google Vision API using the upload button.
        </li>
        <li>4. Check the results!</li>
      </ol>
    </div>
  )
}

export default About
