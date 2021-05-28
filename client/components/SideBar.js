import React from 'react'
import About from './About'
//import {FaGithubSquare, FaLinkedin} from 'react-icons/fa'
import {FiGithub, FiLinkedin, FiMail} from 'react-icons/fi'
//import {ImMail} from 'react-icons/im'
import {Side, Contact, Icon} from './styled/SideBarStyles'

const SideBar = () => {
  return (
    <Side>
      <div>Covid Mask App</div>
      <About />
      <Contact>
        <Icon>
          <FiGithub
            onClick={() => {
              window.location = 'https://github.com/RaymondNimalan'
            }}
          />
        </Icon>
        <Icon>
          <FiLinkedin
            onClick={() => {
              window.location = 'https://www.linkedin.com/in/raymond-nimalan/'
            }}
          />
        </Icon>
        <Icon>
          <FiMail
            onClick={() => {
              window.location = 'mailto:raymondnimalan@gmail.com'
            }}
          />
        </Icon>
      </Contact>
    </Side>
  )
}

export default SideBar
