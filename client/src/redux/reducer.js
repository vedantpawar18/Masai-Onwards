import { GET_AUTH_FAILURE, GET_AUTH_REQUEST, GET_AUTH_SUCCESS, POST_AUTH_FAILURE, POST_AUTH_REQUEST, POST_AUTH_SUCCESS } from "./action"


const initState = {
    isLoding: false,
    isError: false,
    auth: []
}

export const authReducer = (state = initState, action) => {

    switch (action.type) {

        case GET_AUTH_REQUEST:
            return ({
                ...state,
                isLoading: true,
                isError: false
            })

        case GET_AUTH_SUCCESS:
            return ({
                ...state,
                isLoading: false,
                isError: false,
                auth:action.payload
            })

        case GET_AUTH_FAILURE:
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
                    auth:action.payload
                })
    
            case POST_AUTH_FAILURE:
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