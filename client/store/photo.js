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
    //console.log('hello from thunk')
    console.log('image from thunk', image)
    //const newImage = new
    const {data} = await axios.post('/api/', image)
    console.log('data from thunk', data)
    dispatch(analysis(data))
  } catch (error) {
    console.log(error)
  }
}

const intialState = {
  labels: [],
  mask: null
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
