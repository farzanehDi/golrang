import axios from "axios";
import {Routers} from "../../utils/config";
import {reduxTypes} from "../types";

export const getAllUsers = () => {

    return (dispatch) => {

        axios(Routers.USER).then((response) => {

            dispatch({
                type: reduxTypes.FILTERED_USER,
                payload: response.data
            });

            dispatch({
                type: reduxTypes.ALL_USER,
                payload: response.data
            });


        }).catch(function (error) {
            console.log(error);
        });
    }

};
//***get specific user***
export const getUserById = (userId = '') => {

    return (dispatch) => {

        axios(`${Routers.USER}?id=${userId}`).then((response) => {

            dispatch({
                type: reduxTypes.FILTERED_USER,
                payload: response.data
            });

        }).catch(function (error) {
            console.log(error);
        });
    }

};





