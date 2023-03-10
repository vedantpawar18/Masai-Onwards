


import {
    SIGNIN_AUTH_FAILURE,
    SIGNIN_AUTH_REQUEST,
    SIGNIN_AUTH_SUCCESS,

    POST_AUTH_REQUEST,
    POST_AUTH_SUCCESS,
    POST_AUTH_FAILURE,

    GOOGLE_AUTH_REQUEST,
    GOOGLE_AUTH_SUCCESS,
    GOOGLE_AUTH_FAILURE,

    PHONE_AUTH_REQUEST,
    PHONE_AUTH_SUCCESS,
    PHONE_AUTH_FAILURE,

    VERIFY_AUTH_REQUEST,
    VERIFY_AUTH_SUCCESS,
    VERIFY_AUTH_FAILURE,
    
    EMAIL_AUTH_REQUEST,
    EMAIL_AUTH_SUCCESS,
    EMAIL_AUTH_FAILURE,
    VERIFY_EMAIL_AUTH_REQUEST,
    VERIFY_EMAIL_AUTH_SUCCESS,
    VERIFY_EMAIL_AUTH_FAILURE,
    
} from "./action"



const initState = {
    isLoding: false,
    isError: false,
    auth: "",
    error:[]
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
                isError: true,
                error:action.payload

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
                isError: true,
                error:action.payload
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
                isError: true,
                error:action.payload
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
                isError: true,
                error:action.payload
            })

       
            case VERIFY_AUTH_REQUEST:
                return ({
                    ...state,
                    isLoading: true,
                    isError: false
                })
    
            case VERIFY_AUTH_SUCCESS:
                return ({
                    ...state,
                    isLoading: false,
                    isError: false,
                    auth: action.payload
                })
    
            case VERIFY_AUTH_FAILURE:
                return ({
                    ...state,
                    isLoading: false,
                    isError: true,
                    error:action.payload
                })
         
                case EMAIL_AUTH_REQUEST:
                    return ({
                        ...state,
                        isLoading: true,
                        isError: false
                    })
        
                case EMAIL_AUTH_SUCCESS:
                    return ({
                        ...state,
                        isLoading: false,
                        isError: false,
                        auth: action.payload
                    })
        
                case EMAIL_AUTH_FAILURE:
                    return ({
                        ...state,
                        isLoading: false,
                        isError: true,
                        error:action.payload
                    })
                    case VERIFY_EMAIL_AUTH_REQUEST:
                        return ({
                            ...state,
                            isLoading: true,
                            isError: false
                        })
            
                    case VERIFY_EMAIL_AUTH_SUCCESS:
                        return ({
                            ...state,
                            isLoading: false,
                            isError: false,
                            auth: action.payload
                        })
            
                    case VERIFY_EMAIL_AUTH_FAILURE:
                        return ({
                            ...state,
                            isLoading: false,
                            isError: true,
                            error:action.payload
                        })

        default:
            return ({
                ...state
            })
    }

}

