import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {HiDotsVertical} from 'react-icons/hi'
import {RiSurgicalMaskLine} from 'react-icons/ri'
import {Navbar, Icon, NavMenu, Title} from './styled/NavStyles'
import {dropToggle} from '../store/toggle'

const Nav = () => {
  const dispatch = useDispatch()

  return (
    <Navbar>
      <NavMenu>
        <Title>MaskOn</Title>
        <Icon>
          <HiDotsVertical onClick={() => dispatch(dropToggle())} />
        </Icon>
      </NavMenu>
    </Navbar>
  )
}

export default Nav
