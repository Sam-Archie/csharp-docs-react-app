import axios from "../../axios";
import { setLoginDetails } from "./actions";

export const postLogin = (userData: any) => {
    return (dispatch: any) => {
        axios.post("/UserAccount/authenticate", {
            email: userData.email,
            password: userData.password
        }).then(({ data }) => {
            console.log(data);
            dispatch(setLoginDetails(data));
        })
    }
}