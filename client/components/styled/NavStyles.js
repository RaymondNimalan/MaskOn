import styled from 'styled-components'

export const Navbar = styled.nav`
  display: none;
  height: 50px;
  width: 100%;
  position: fixed;
  z-index: 100;
  background: black;
  align-items: center;
  flex-direction: row;

  @media screen and (max-width: 768px) {
    display: flex;
  }
`

export const NavMenu = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`

export const Icon = styled.div`
  display: flex;
  padding: 0 8px 0 8px;
  color: white;
  font-size: 48px;
  cursor: pointer;
  height: 100%;
`

export const Title = styled.div`
  display: flex;
  font-size: 28px;
  color: white;
  padding-left: 8px;
  //height: 100%;
`
