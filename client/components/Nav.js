import React from 'react'
import {HiDotsVertical} from 'react-icons/hi'
import {RiSurgicalMaskLine} from 'react-icons/ri'
import {Navbar, Icon, NavMenu} from './styled/NavStyles'

const Nav = () => {
  return (
    <Navbar>
      <NavMenu>
        <Icon>
          <RiSurgicalMaskLine />
        </Icon>
        <Icon>
          <HiDotsVertical />
        </Icon>
      </NavMenu>
    </Navbar>
  )
}

export default Nav
