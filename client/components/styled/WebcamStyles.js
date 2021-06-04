import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  //max-width: 640px;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: black;
  border: medium ridge #263237; /* border: 16px solid;
  border-color: #a3708a; */
  @media screen and (max-width: 768px) {
    //padding-top: 60px;
  }
`

export const CameraContainer = styled.div`
  display: flex;
  //padding-top: 100px;
`

export const ButtonContainer = styled.div`
  display: flex;
  width: 500px;
  height: 100px;
  font-size: 48px;
  align-items: center;
  justify-content: space-between;
  color: white;
`

export const Icon = styled.div`
  display: flex;
  font-size: 48px;
  cursor: pointer;
  margin: 0px 32px 0px 32px;
`

export const Tablet = styled.div`
  display: flex;
  position: relative;
  //justify-content: space-between;
  //width: 768px;
  //height: 1024px;
  height: 100vh;
  margin: auto;
  border: 16px black solid;
  border-top-width: 60px;
  border-bottom-width: 60px;
  border-radius: 36px;
  &:after {
    content: '';
    display: block;
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
    display: block;
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

// export const CameraContainer = styled.div``

// export const CameraContainer = styled.div``
