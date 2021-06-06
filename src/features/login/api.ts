import axios from "../../axios";
import { setLoginResponseData } from "./actions";
import { IUserData } from "./types";

export const postLogin = (userData: IUserData) => {
    return (dispatch: any) => {
        axios.post("/UserAccount/authenticate", {
            email: userData.email,
            password: userData.password
        }).then(({ data }) => {
            console.log(data)
            dispatch(setLoginResponseData(data));
        })
    }
}