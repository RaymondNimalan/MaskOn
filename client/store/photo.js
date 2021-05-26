import axios from 'axios'

// ACTION TYPE

export const ANALYSIS = 'ANALYSIS'

// ACTION CREATOR

export const analysis = photo => ({
  type: ANALYSIS,
  photo
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
  photo: '',
  mask: null
}

const photoReducer = (state = intialState, action) => {
  switch (action.type) {
    case ANALYSIS:
      return state
    default:
      return state
  }
}

export default photoReducer
