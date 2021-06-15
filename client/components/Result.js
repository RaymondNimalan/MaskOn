import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import YesMask from './StorySets/YesMask'
import NoMask from './StorySets/NoMask'
import {
  MainContainer,
  ButtonContainer,
  ArrowIcon,
  LabelContainer,
  DataContainer,
  Label,
  Header,
  Title
} from './styled/ResultStyles'
import {homeToggle} from '../store/toggle'

const Result = () => {
  const [mask, setMask] = useState(false)

  const dispatch = useDispatch()

  const {labels} = useSelector(state => state.photoReducer)

  useEffect(
    () => {
      if (labels.includes('Mask')) {
        setMask(true)
      } else if (labels.includes('Personal protective equipment')) {
        setMask(true)
      } else {
        setMask(false)
      }
    },
    [labels]
  )

  return (
    <MainContainer>
      {mask ? (
        <Header>Good Work! You Have a Mask on!</Header>
      ) : (
        <Header>Oh No! You are not Wearing a Mask!</Header>
      )}
      {mask ? <YesMask /> : <NoMask />}
      <DataContainer>
        <h1>Labels detected within your image!</h1>
        <LabelContainer>
          {labels.map((label, index) => <Label key={index}>{label}</Label>)}
        </LabelContainer>
        <ButtonContainer
          onClick={() => {
            dispatch(homeToggle())
          }}
        >
          <Title>Try Again</Title>
          <ArrowIcon />
        </ButtonContainer>
      </DataContainer>
    </MainContainer>
  )
}

export default Result
