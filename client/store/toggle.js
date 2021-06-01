import axios from 'axios'

// INITIAL STATE

const intialState = false

// ACTION TYPE

export const TOGGLE = 'TOGGLE'

// ACTION CREATOR

export const toggle = () => ({
  type: TOGGLE
})

const toggleReducer = (state = intialState, action) => {
  switch (action.type) {
    case TOGGLE:
      return !state
    default:
      return state
  }
}

export default toggleReducer
