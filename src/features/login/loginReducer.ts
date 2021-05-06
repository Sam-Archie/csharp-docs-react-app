import { LOGIN_SUBMIT } from './actionTypes'
import { ILoginDataResponse } from './types'

const initialState = {
  token: '',
  email: '',
  userName: '',
  id: '',
}

const loginSubmit = (state: ILoginDataResponse, action: any) => {
  console.log(action)
  return {
    ...state,
    token: action.payload.token,
    email: action.payload.email,
    userName: action.payload.userName,
    id: action.payload.id,
  }
}

export default (state: ILoginDataResponse = initialState, action: any) => {
  switch (action.type) {
    case LOGIN_SUBMIT:
      return loginSubmit(state, action);
    default:
      return state;
  }
}