import axios from 'axios'

// INITIAL STATE

const intialState = {
  homeToggle: false,
  dropdownToggle: false
}

// ACTION TYPE

export const HOME_TOGGLE = 'HOME_TOGGLE'
export const DROP_TOGGLE = 'DROP_TOGGLE'

// ACTION CREATOR

export const homeToggle = () => ({
  type: HOME_TOGGLE
})

export const dropToggle = () => ({
  type: DROP_TOGGLE
})

const toggleReducer = (state = intialState, action) => {
  switch (action.type) {
    case HOME_TOGGLE:
      return {...state, homeToggle: !state.homeToggle}
    case DROP_TOGGLE:
      return {...state, dropdownToggle: !state.dropdownToggle}
    default:
      return state
  }
}

export default toggleReducer
