import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 16px;
  @media screen and (max-width: 400px) {
    //width: 75%;
  }
`

export const ScreenContainer = styled.div`
  display: flex;
  //max-width: 640px;
  height: 100%;
  width: 100%;
  //width: 75%;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: black;
  border: medium ridge #263237; /* border: 16px solid;
  border-color: #a3708a; */
  @media screen and (max-width: 768px) {
    //padding-top: 60px;
  }
  @media screen and (max-width: 400px) {
    //width: 75%;
  }
`

export const CameraContainer = styled.div`
  display: flex;
  width: 100%;
  //width: 75%;
  //padding-top: 100px;
  @media screen and (max-width: 400px) {
    //width: 75%;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  //width: 500px;
  width: 100%;
  //height: 100px;
  //font-size: 48px;
  align-items: flex-end;
  justify-content: space-between;
  color: white;
  @media screen and (max-width: 550px) {
    //height: 100%;
  }
`

export const Icon = styled.div`
  display: flex;
  font-size: 48px;
  cursor: pointer;
  margin: 0px 32px 0px 32px;
  @media screen and (max-width: 550px) {
    font-size: 32px;
  }
`

export const Tablet = styled.div`
  display: flex;
  position: relative;
  //justify-content: space-between;
  //width: 768px;
  //height: 1024px;
  height: 100%;
  width: 100%;
  //width: 60%;
  border: 16px black solid;
  border-top-width: 60px;
  border-bottom-width: 60px;
  border-radius: 36px;
  &:after {
    content: '';
    display: flex;
    width: 35px;
    height: 35px;
    position: absolute;
    left: 50%;
    bottom: -65px;
    transform: translate(-50%, -50%);
    background: #333;
    border-radius: 50%;
  }
  :before {
    content: '';
    display: flex;
    width: 60px;
    height: 5px;
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #333;
    border-radius: 10px;
  }
  @media screen and (max-width: 550px) {
    //height: 75%;
  }
`

// export const CameraContainer = styled.div``

// export const CameraContainer = styled.div``
