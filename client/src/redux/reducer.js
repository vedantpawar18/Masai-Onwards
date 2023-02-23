import { GET_AUTH_FAILURE, GET_AUTH_REQUEST, GET_AUTH_SUCCESS, GET_DATA_FAILURE, GET_DATA_REQUEST, GET_DATA_SUCCESS, POST_AUTH_FAILURE, POST_AUTH_REQUEST, POST_AUTH_SUCCESS } from "./action"


const initState = {
    isLoding: false,
    isError: false,
    auth: [],
    data:[]
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