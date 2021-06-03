import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  max-width: 640px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
  border: 16px solid;
  border-color: purple;
  @media screen and (max-width: 768px) {
    //padding-top: 60px;
  }
`

export const CameraContainer = styled.div`
  display: flex;
  padding-top: 100px;
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

//export const WebCam = styled(Webcam)``

// export const CameraContainer = styled.div``

// export const CameraContainer = styled.div``
