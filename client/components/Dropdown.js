import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {
  DropdownContainer,
  AboutContainer,
  Title,
  Content,
  Contact,
  Icon,
  CloseIcon
} from './styled/DropdownStyles'
import About from './About'
import SideBar from './SideBar'
import {FiGithub, FiLinkedin, FiMail} from 'react-icons/fi'
import ParticlesBg from 'particles-bg'
import icon from '../../public/images/icon'
import {dropToggle} from '../store/toggle'

const Dropdown = () => {
  const {dropdownToggle} = useSelector(state => state.toggleReducer)

  const dispatch = useDispatch()

  const config = {
    num: [1, 2],
    rps: 0.1,
    radius: [5, 40],
    life: [1.5, 3],
    v: [1, 2],
    tha: [1, 3],
    alpha: [0.6, 0],
    scale: [0.1, 0.2],
    body: icon,
    position: 'all',
    color: ['random', '#ff0000'],
    cross: 'dead',
    random: 1
  }
  return (
    <DropdownContainer isOpen={dropdownToggle}>
      <CloseIcon onClick={() => dispatch(dropToggle())} />
      <ParticlesBg
        type="custom"
        num={1}
        config={config}
        bg={{
          display: 'flex',
          position: 'absolute',
          zIndex: '-2',
          width: '100%'
        }}
      />
      <Title>MaskOn</Title>
      <Content>
        <AboutContainer>
          <About />
        </AboutContainer>
        <Contact>
          <Icon>
            <FiGithub
              onClick={() => {
                window.location =
                  'https://github.com/RaymondNimalan/CovidMaskApp'
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
    </DropdownContainer>
  )
}

export default Dropdown
