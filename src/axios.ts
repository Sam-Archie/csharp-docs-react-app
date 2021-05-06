import axios from 'axios';

export default axios.create({
    baseURL: "http://localhost:47920/api/",
    headers: {
        Accept: "application/json",
    }
})