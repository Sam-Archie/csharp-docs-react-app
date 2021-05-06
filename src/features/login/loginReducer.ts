import { LOGIN_SUBMIT } from './actionTypes'

const initialState = {
  email: '',
  userName: '',
  id: '',
}

const loginSubmit = (state = initialState, action: any) => {
  console.log(action)
  return {
    ...state,
    email: action.payload.email,
    userName: action.payload.userName,
    id: action.payload.id,
  }
}

export default (state = initialState, action: any) => {
  switch (action.type) {
    case LOGIN_SUBMIT:
      return loginSubmit(state, action);
    default:
      return state;
  }
}