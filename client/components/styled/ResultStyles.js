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
`
export const Header = styled.div`
  display: flex;
  font-size: 32px;
  width: 100%;
  justify-content: center;

  text-align: center;
  padding: 16px 16px 0 16px;
  @media screen and (max-width: 400px) {
    font-size: 28px;
  }
`

export const DataContainer = styled.div`
  display: flex;
  width: 100%;
  box-sizing: border-box;
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
`
export const LabelContainer = styled.div`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  //max-height: 300px;
  //max-width: 80%;
  flex-wrap: wrap;
  font-size: 20px;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: solid;
  border-color: #5b7e98;
  border-radius: 10px;
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
  margin-top: 16px;
  border: solid;
  border-color: #5b7e98;
  border-radius: 10px;

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
  height: 100%;
`

export const Title = styled.div`
  display: flex;
  color: white;
`
