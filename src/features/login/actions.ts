import { LOGIN_SUBMIT } from "./actionTypes"
import { ILoginDataResponse } from "./types"

export const setLoginResponseData = (loginResponseData: ILoginDataResponse) => {
    return {
        type: LOGIN_SUBMIT,
        payload: loginResponseData,
    }
}