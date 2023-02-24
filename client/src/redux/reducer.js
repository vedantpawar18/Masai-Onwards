
import { GET_AUTH_FAILURE, GET_AUTH_REQUEST, GET_AUTH_SUCCESS, GET_DATA_FAILURE, GET_DATA_REQUEST, GET_DATA_SUCCESS, POST_AUTH_FAILURE, POST_AUTH_REQUEST, POST_AUTH_SUCCESS } from "./action"

import {
    SIGNIN_AUTH_FAILURE,
    SIGNIN_AUTH_REQUEST,
    SIGNIN_AUTH_SUCCESS,
    POST_AUTH_FAILURE,
    POST_AUTH_REQUEST,
    POST_AUTH_SUCCESS,
    GOOGLE_AUTH_REQUEST,
    GOOGLE_AUTH_SUCCESS,
    GOOGLE_AUTH_FAILURE,
    PHONE_AUTH_REQUEST,
    PHONE_AUTH_SUCCESS,
    PHONE_AUTH_FAILURE
} from "./action"



const initState = {
    isLoding: false,
    isError: false,
    auth: [],
    data:[]
}

export const authReducer = (state = initState, action) => {

    switch (action.type) {

        case SIGNIN_AUTH_REQUEST:
            return ({
                ...state,
                isLoading: true,
                isError: false
            })

        case SIGNIN_AUTH_SUCCESS:
            return ({
                ...state,
                isLoading: false,
                isError: false,
                auth: action.payload
            })

        case SIGNIN_AUTH_FAILURE:
            return ({
                ...state,
                isLoading: false,
                isError: true
            })

        case POST_AUTH_REQUEST:
            return ({
                ...state,
                isLoading: true,
                isError: false
            })

        case POST_AUTH_SUCCESS:
            return ({
                ...state,
                isLoading: false,
                isError: false,
                auth: action.payload
            })

        case POST_AUTH_FAILURE:
            return ({
                ...state,
                isLoading: false,
                isError: true
            })

        case GOOGLE_AUTH_REQUEST:
            return ({
                ...state,
                isLoading: true,
                isError: false
            })

        case GOOGLE_AUTH_SUCCESS:
            return ({
                ...state,
                isLoading: false,
                isError: false,
                auth: action.payload
            })

        case GOOGLE_AUTH_FAILURE:
            return ({
                ...state,
                isLoading: false,
                isError: true
            })



        case PHONE_AUTH_REQUEST:
            return ({
                ...state,
                isLoading: true,
                isError: false
            })

        case PHONE_AUTH_SUCCESS:
            return ({
                ...state,
                isLoading: false,
                isError: false,
                auth: action.payload
            })

        case PHONE_AUTH_FAILURE:
            return ({
                ...state,
                isLoading: false,
                isError: true
            })




        default:
            return ({
                ...state
            })
    }



}


export const dataReducer = (state = initState, action) => {

    switch (action.type) {

        case GET_DATA_REQUEST:
            return ({
                ...state,
                isLoading: true,
                isError: false
            })

        case GET_DATA_SUCCESS:
            return ({
                ...state,
                isLoading: false,
                isError: false,
                data:action.payload
            })

        case GET_DATA_FAILURE:
            return ({
                ...state,
                isLoading: false,
                isError: true
            })

           
        default:
            return ({
                ...state
            })
    }



}