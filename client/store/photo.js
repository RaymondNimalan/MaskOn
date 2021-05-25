import axios from 'axios'

// ACTION TYPE

export const ANALYSIS = 'ANALYSIS'

// ACTION CREATOR

export const analysis = photo => ({
  type: ANALYSIS,
  photo
})

// THUNK

export const _analysis = photo => async dispatch => {
  try {
    const {data} = await axios.post('/api/', photo)
  } catch (error) {
    console.log(error)
  }
}

const intialState = {}

const photoReducer = (state = intialState, action) => {
  switch (action.type) {
    case ANALYSIS:
      return action.photo
    default:
      return state
  }
}

export default photoReducer
