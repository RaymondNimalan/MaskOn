import styled from 'styled-components'

export const Side = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  border: 5px ridge #5b7e98;
  color: #263237;
  border-radius: 10px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const Title = styled.div`
  display: flex;
  justify-content: center;
  font-size: 32px;
  padding: 8px 8px;
  margin: 16px;
`

export const Content = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
`

export const Contact = styled.div`
  display: flex;
  padding: 8px 8px;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`

export const Icon = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 40px;
  &:hover {
    color: #fdc726;
  }
`
