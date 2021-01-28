import {reduxTypes} from '../types';

const initialState = {
    allUser: [],
    filteredUser: [],
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {

        case reduxTypes.ALL_USER:
            return {...state, allUser: action.payload};
        case reduxTypes.FILTERED_USER:
            return {...state, filteredUser: action.payload};
        default:
            return state;

    }
}

export default authReducer;