import axios from 'axios'

// ACTION TYPE

export const ANALYSIS = 'ANALYSIS'

// ACTION CREATOR

export const analysis = data => ({
  type: ANALYSIS,
  data
})

// THUNK

export const _analysis = image => async dispatch => {
  try {
    const {data} = await axios.post('/api/', image)
    dispatch(analysis(data))
  } catch (error) {
    console.log(error)
  }
}

const intialState = {
  labels: []
}

const photoReducer = (state = intialState, action) => {
  switch (action.type) {
    case ANALYSIS:
      return {...state, labels: action.data}
    default:
      return state
  }
}

export default photoReducer
