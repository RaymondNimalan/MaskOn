import styled from 'styled-components'
import {BsArrowReturnLeft} from 'react-icons/bs'

export const MainContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  @media screen and (max-width: 768px) {
    padding-top: 60px;
    height: 100vh;
  }
`
export const Header = styled.div`
  display: flex;
  font-size: 32px;
  text-align: center;
  padding: 16px;
  @media screen and (max-width: 768px) {
    padding: 16px 16px 0 16px;
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
    //padding: 16px;
  }
  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`
export const LabelContainer = styled.div`
  display: flex;
  //width: 800px;
  flex-wrap: wrap;
  font-size: 20px;
  justify-content: space-around;
  text-align: center;
  border: solid;
  //border-color: #c95f4f;
  border-color: #5b7e98;
  margin: 16px;
`

export const Label = styled.div`
  display: flex;
  width: 32%;
  justify-content: space-around;
`

export const ButtonContainer = styled.div`
  display: flex;
  //flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 50px;
  color: white;
  background-color: #90cafa;
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
  font-size: 40px;
`

// export const CameraContainer = styled.div``
// export const CameraContainer = styled.div``
