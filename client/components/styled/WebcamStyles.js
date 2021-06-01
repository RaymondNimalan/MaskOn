import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  //position: relative;
  flex-direction: column;
  height: 800px;
  align-items: center;
  //padding-left: 100px;
  @media screen and (max-width: 768px) {
    padding-top: 60px;
  }
`

export const CameraContainer = styled.div`
  display: flex;
  height: 480px;
  justify-content: center;
  background-color: blue;
`

export const ButtonContainer = styled.div`
  display: flex;
  width: 500px;
  height: 100px;
  font-size: 48px;
  align-items: center;
  justify-content: space-between;
`

export const Icon = styled.div`
  display: flex;
  font-size: 48px;
  cursor: pointer;
  margin: 0px 32px 0px 32px;
`

// export const CameraContainer = styled.div``

// export const CameraContainer = styled.div``

// export const CameraContainer = styled.div``

// onClick={() => {
//     setInfo(!infoToggle)
//   }}
