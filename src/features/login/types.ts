import { LOGIN_SUBMIT } from "./actionTypes";

export interface IUserData {
    email: string,
    password: string
}

export interface ILoginDataResponse {
    token: string,
    email: string,
    userName: string,
    id: string
}
