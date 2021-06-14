import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  height: 100%;
  box-sizing: border-box;
  justify-content: space-around;
  align-items: center;
  @media screen and (max-width: 768px) {
    margin-top: 50px;
  }
`

export const CameraContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`
