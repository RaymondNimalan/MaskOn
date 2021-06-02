import styled from 'styled-components'
import {BsArrowReturnLeft} from 'react-icons/bs'

export const MainContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  color: white;
  background-color: green;
  cursor: pointer;
`

export const ArrowIcon = styled(BsArrowReturnLeft)`
  display: flex;
  font-size: 40px;
`

export const LabelContainer = styled.div`
  display: flex;
  width: 800px;
  flex-wrap: wrap;
  font-size: 20px;
  color: blue;
  justify-content: space-between;
  border: solid;
  border-color: green;
`

export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 20px;
    text-decoration: underline;
    text-align: center;
    padding: 16px;
  }
`

export const Label = styled.div`
  display: flex;
  width: 32%;
  justify-content: space-around;
`

// export const CameraContainer = styled.div``
// export const CameraContainer = styled.div``
