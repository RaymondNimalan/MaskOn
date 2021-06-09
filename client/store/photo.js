import axios from 'axios'
import {homeToggle} from './toggle'

// INITIAL STATE

const intialState = {
  labels: [],
  mask: null,
  loading: false
}

// ACTION TYPE

export const ANALYSIS = 'ANALYSIS'

export const MASK_TRUE = 'MASK_TRUE'

export const MASK_FALSE = 'MASK_FALSE'

export const LOADING = 'LOADING'

// ACTION CREATOR

export const analysis = data => ({
  type: ANALYSIS,
  data
})

export const maskOn = () => ({
  type: MASK_TRUE
})

export const maskOff = () => ({
  type: MASK_FALSE
})

export const loading = () => ({
  type: LOADING
})

// THUNK

export const _analysis = image => async dispatch => {
  try {
    const {data} = await axios.post('/api/', image)
    dispatch(loading())
    dispatch(analysis(data))
    setTimeout(() => {
      dispatch(loading())
    }, 4000)
    setTimeout(() => {
      dispatch(homeToggle())
    }, 4001)
  } catch (error) {
    console.log(error)
  }
}

const photoReducer = (state = intialState, action) => {
  switch (action.type) {
    case ANALYSIS:
      return {...state, labels: action.data}
    case LOADING:
      return {...state, loading: !state.loading}
    case MASK_TRUE:
      return {...state, mask: true}
    case MASK_FALSE:
      return {...state, mask: false}
    default:
      return state
  }
}

export default photoReducer
