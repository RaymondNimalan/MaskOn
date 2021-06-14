import styled from 'styled-components'
import {FaRegTimesCircle} from 'react-icons/fa'

export const DropdownContainer = styled.div`
  display: flex;
  z-index: 999;
  flex-direction: column;
  position: absolute;
  overflow: scroll;
  align-items: center;
  height: 100%;
  min-height: 100vh;
  width: 60%;
  top: 0;
  right: 0;
  background-color: white;
  opacity: ${({isOpen}) => (isOpen ? '1' : '0')};
  top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
  z-index: ${({isOpen}) => (isOpen ? '999' : '-999')};
  transition: 0.2s ease-in-out;
  box-shadow: -2px 0 2px grey;
  border: 5px ridge #5b7e98;
  border-radius: 10px;
`
export const AboutContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`
export const Title = styled.div`
  display: flex;
  text-align: center;
  margin-top: 32px;
  font-size: 32px;
  padding: 16px;
`
export const Content = styled.div`
  display: flex;
  height: 100%;
  width: 95%;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`
export const Contact = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 8px;
`
export const Icon = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 40px;
  &:hover {
    color: #fdc726;
  }
`

export const CloseIcon = styled(FaRegTimesCircle)`
  position: absolute;
  font-size: 32px;
  top: 12px;
  right: 12px;
  cursor: pointer;
  &:hover {
    color: #fdc726;
  }
`
