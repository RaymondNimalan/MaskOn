import styled from 'styled-components'
import {FiEyeOff, FiEye} from 'react-icons/fi'

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
`

export const HowItWorks = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 16px;
  width: 100%;
  h1 {
    display: flex;
    font-size: 24px;
    align-items: center;
  }
`
export const Instructions = styled(HowItWorks)``

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const Icon = styled.div`
  display: flex;
  padding: 8px;
  align-items: center;
  align-self: flex-end;
`

export const OpenIcon = styled(FiEye)`
  display: flex;
  cursor: pointer;
  font-size: 32px;
`
export const CloseIcon = styled(FiEyeOff)`
  display: flex;
  cursor: pointer;
  font-size: 32px;
`

// export const CameraContainer = styled.div``
// export const CameraContainer = styled.div``
