import axios from "axios";

export const apimanager = axios.create({
    baseURL: 'https://reqres.in/api'
});
