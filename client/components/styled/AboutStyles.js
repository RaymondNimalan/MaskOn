import styled from 'styled-components'
import {FiEyeOff, FiEye} from 'react-icons/fi'

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 350px;
`

export const HowItWorks = styled(Content)`
  padding: 8px 8px;
  h1 {
    display: flex;
    font-size: 24px;
    align-items: center;
    @media screen and (max-width: 400px) {
      font-size: 20px;
    }
  }
  p {
    padding: 0px 4px 4px;
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
  &:hover {
    color: #fdc726;
  }
`
export const CloseIcon = styled(FiEyeOff)`
  display: flex;
  cursor: pointer;
  font-size: 32px;
  &:hover {
    color: #fdc726;
  }
`
