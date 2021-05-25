//import axios from 'axios'

// ACTION TYPE

export const ANALYSIS = 'ANALYSIS'

// ACTION CREATOR

// export const _analysis = (photo) => async (dispatch) => {
//   try {
//   } catch (error) {}
// }

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
