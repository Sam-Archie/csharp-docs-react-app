import { LOGIN_SUBMIT } from "./actionTypes"

export const setLoginDetails = (userData: any) => {
    return {
        type: LOGIN_SUBMIT,
        payload: userData,
    }
}