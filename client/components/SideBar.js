import React from 'react'
import About from './About'
import {FiGithub, FiLinkedin, FiMail} from 'react-icons/fi'
import {Side, Contact, Icon, Content, Title} from './styled/SideBarStyles'

const SideBar = () => {
  return (
    <Side>
      <Title>MaskOn</Title>
      <Content>
        <About />
        <Contact>
          <Icon>
            <FiGithub
              onClick={() => {
                window.location = 'https://github.com/RaymondNimalan/MaskOn'
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
      </Content>
    </Side>
  )
}

export default SideBar
