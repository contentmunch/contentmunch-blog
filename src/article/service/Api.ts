import axios, {AxiosRequestConfig} from 'axios';

const developmentBaseURL = "http://localhost:8090/api/";
const productionBaseURL = "https://www.contentmunch.com/api/"

export const api = axios.create({
    baseURL: process.env.NODE_ENV && process.env.NODE_ENV === "development" ? developmentBaseURL : productionBaseURL
});

export const authHeader = (accessToken: string): AxiosRequestConfig => ({headers: {Authorization: 'Bearer ' + accessToken}});


