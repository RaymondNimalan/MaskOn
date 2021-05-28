import styled from 'styled-components'

export const Side = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 300px;
  background-color: green;
  justify-content: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const Contact = styled.div`
  display: flex;
  align-self: flex-end;
  flex-direction: row;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-around;
`

export const Icon = styled.div`
  cursor: pointer;
  font-size: 5vh;
`

// export const CameraContainer = styled.div``

// export const CameraContainer = styled.div``
