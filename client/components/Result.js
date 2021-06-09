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
  Header
} from './styled/ResultStyles'
import {homeToggle} from '../store/toggle'
import {BsArrowReturnLeft} from 'react-icons/bs'

const Result = () => {
  const [mask, setMask] = useState(false)

  const dispatch = useDispatch()

  //const {labels} = useSelector((state) => state.photoReducer)

  const labels = [
    'Forehead',
    'Nose',
    'Chin',
    'Eyebrow',
    'Beard',
    'Jaw',
    'Neck',
    'Eyewear',
    'Facial hair',
    'Cool',
    'Moustache',
    'Selfie',
    'Tints and shades',
    'Room',
    'Personal protective equiipment'
  ]

  useEffect(
    () => {
      console.log(labels)
      if (labels.includes('Mask')) {
        setMask(true)
        console.log(mask)
      } else if (labels.includes('Personal protective equipment')) {
        setMask(true)
        console.log(mask)
      } else {
        setMask(false)
        console.log('mask', mask)
      }
    },
    [labels]
  )

  return (
    <MainContainer>
      {mask ? (
        <Header>Good Work! You Have A Mask On!</Header>
      ) : (
        <Header>Oh No! You Are Not Wearing A Mask!</Header>
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
          Try Again
          <ArrowIcon />
        </ButtonContainer>
      </DataContainer>
    </MainContainer>
  )
}

export default Result
