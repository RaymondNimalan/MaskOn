import styled from 'styled-components'

export const Navbar = styled.nav`
  display: none;
  height: 60px;
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
  width: 100%;
  justify-content: space-between;
`

export const Icon = styled.div`
  display: flex;
  padding: 0 8px 0 8px;
  color: white;
  font-size: 48px;
`

// export const CameraContainer = styled.div``
// export const CameraContainer = styled.div``
// export const CameraContainer = styled.div``
// export const CameraContainer = styled.div``
