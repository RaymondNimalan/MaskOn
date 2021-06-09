import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {HiDotsVertical} from 'react-icons/hi'
import {RiSurgicalMaskLine} from 'react-icons/ri'
import {Navbar, Icon, NavMenu} from './styled/NavStyles'
import {dropToggle} from '../store/toggle'

const Nav = () => {
  const {dropdownToggle} = useSelector(state => state.toggleReducer)

  const dispatch = useDispatch()

  return (
    <Navbar>
      <NavMenu>
        <Icon>
          <RiSurgicalMaskLine />
        </Icon>
        <Icon>
          <HiDotsVertical onClick={() => dispatch(dropToggle())} />
        </Icon>
      </NavMenu>
    </Navbar>
  )
}

export default Nav
