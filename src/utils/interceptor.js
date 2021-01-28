import axios from 'axios';
import {Routers} from "./config";

export const interceptor = axios.interceptors.response.use(
    response => successHandler(response),
    error => errorHandler(error)
);


axios.interceptors.request.use(async request => {
    request.baseURL = Routers.BASE_URL;
    return request;
});


const errorHandler = (error) => {

    console.log(
        "%c ERROR (interceptor) response =>",
        "background: #8B0000; color: #ffffff; font-size:11pt; font-weight: bold;",
        error.response
    );
    return Promise.reject({...error});

}


const successHandler = (response) => {

    console.log(
        "%c SUCCESS (interceptor) response  =>",
        "background: #006400; color: #ffffff; font-size:11pt; font-weight: bold;",
        response
    );
   return response;

};
