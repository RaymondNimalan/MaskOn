import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 16px;
`

export const ScreenContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: black;
  border: medium ridge #263237;
`

export const CameraContainer = styled.div`
  display: flex;
  width: 100%;
  img {
    width: 100%;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-end;
  justify-content: space-between;
  color: white;
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
  height: 100%;
  width: 100%;
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
`
