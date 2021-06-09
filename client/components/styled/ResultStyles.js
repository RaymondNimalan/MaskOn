import styled from 'styled-components'
import {BsArrowReturnLeft} from 'react-icons/bs'

export const MainContainer = styled.div`
  display: flex;
  height: 100vh;
  position: relative;
  flex-direction: column;
  //justify-content: space-around;
  align-items: center;
`
export const Header = styled.div`
  display: flex;
  font-size: 32px;
  text-align: center;
  padding: 16px;
  @media screen and (max-width: 768px) {
    padding: 16px 16px 0 16px;
  }
  @media screen and (max-width: 400px) {
    font-size: 28px;
  }
`

export const DataContainer = styled.div`
  display: flex;
  height: 300px;

  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: #263237;
  h1 {
    font-size: 20px;
    text-decoration: underline;
    text-decoration-color: #5b7e98;
    text-align: center;
  }
  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`
export const LabelContainer = styled.div`
  display: flex;
  max-height: 300px;
  max-width: 75%;
  flex-wrap: wrap;
  font-size: 20px;
  justify-content: space-evenly;
  align-items: stretch;
  text-align: center;
  border: solid;
  //border-color: #c95f4f;
  border-color: #5b7e98;
  margin: 16px;
  @media screen and (max-width: 380px) {
    //width: 75%;
    //font-size: 16px;
  }
`

export const Label = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #90cafa;
  border: 4px black;
  border-radius: 5px;
  padding: 4px;
  margin: 4px;
  @media screen and (max-width: 380px) {
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 150px;
  height: 50px;
  color: white;
  background-color: #263237;
  cursor: pointer;
  padding: 8px;
  border: solid;
  border-color: #5b7e98;
  &:hover {
    border-color: #fdc726;
  }
`
export const ArrowIcon = styled(BsArrowReturnLeft)`
  display: flex;
  font-size: 32px;
`

// export const CameraContainer = styled.div``
// export const CameraContainer = styled.div``
