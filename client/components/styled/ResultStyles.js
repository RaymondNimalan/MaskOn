import styled from 'styled-components'
import {BsArrowReturnLeft} from 'react-icons/bs'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  background-color: #d6e3f8;
  justify-content: space-evenly;
  position: relative;
  align-items: center;
  /* @media screen and (min-width: 768px) {
    max-height: 100vh;
    justify-content: space-between;
  } */
`
export const Header = styled.div`
  display: flex;
  font-size: 32px;
  width: 100%;
  justify-content: center;
  //align-items: center;

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
  //height: 100%;
  width: 100%;
  //max-height: 300px;
  box-sizing: border-box;
  //align-self: flex-end;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: #263237;
  padding: 16px;
  h1 {
    padding: 8px;
    font-size: 20px;
    text-decoration: underline;
    text-decoration-color: #5b7e98;
    text-align: center;
  }
  @media screen and (max-width: 768px) {
    //justify-content: center;
  }
`
export const LabelContainer = styled.div`
  display: flex;
  //height: 100%;
  width: 100%;
  box-sizing: border-box;
  //max-height: 300px;
  //max-width: 80%;
  flex-wrap: wrap;
  font-size: 20px;
  justify-content: space-evenly;
  //align-items: stretch;
  text-align: center;
  border: solid;
  //border-color: #c95f4f;
  border-color: #5b7e98;
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
  height: 100%;
  justify-content: space-evenly;
  align-items: center;
  width: 150px;
  height: 50px;
  color: white;
  background-color: #263237;
  cursor: pointer;
  margin: 16px;
  border: solid;
  border-color: #5b7e98;

  &:hover {
    border-color: #fdc726;
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 16px;
  }
`
export const ArrowIcon = styled(BsArrowReturnLeft)`
  display: flex;
  font-size: 32px;
`

// export const CameraContainer = styled.div``
// export const CameraContainer = styled.div``
