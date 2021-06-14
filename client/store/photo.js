import axios from 'axios'
import {homeToggle} from './toggle'
import {Toast} from '../components/Toast/toast'

// INITIAL STATE

const intialState = {
  labels: [],
  loading: false
}

// ACTION TYPE

export const ANALYSIS = 'ANALYSIS'

export const LOADING = 'LOADING'

// ACTION CREATOR

export const analysis = data => ({
  type: ANALYSIS,
  data
})

export const loading = () => ({
  type: LOADING
})

// THUNK

export const _analysis = image => async dispatch => {
  try {
    const {data} = await axios.post('/api/', image)
    if (data.length === 1) {
      console.log('error in image')
      return new Toast({
        message: 'Capture a photo with the Camera Button before uploading!',
        type: 'danger'
      })
    } else {
      dispatch(loading())
      dispatch(analysis(data))
      setTimeout(() => {
        dispatch(loading())
      }, 4000)
      setTimeout(() => {
        dispatch(homeToggle())
      }, 4001)
    }
  } catch (err) {
    console.log(err)
  }
}

const photoReducer = (state = intialState, action) => {
  switch (action.type) {
    case ANALYSIS:
      return {...state, labels: action.data}
    case LOADING:
      return {...state, loading: !state.loading}
    default:
      return state
  }
}

export default photoReducer
