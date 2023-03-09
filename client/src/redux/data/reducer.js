import {
    GET_DATA_FAILURE,
    GET_DATA_REQUEST,
    GET_DATA_SUCCESS,
    PROFILE_DATA_FAILURE,
    PROFILE_DATA_REQUEST,
    PROFILE_DATA_SUCCESS,
    SCORE_DATA_FAILURE,
    SCORE_DATA_REQUEST,
    SCORE_DATA_SUCCESS
} from "./action"




const initState = {
    isLoding: false,
    isError: false,
    data: []
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
                data: action.payload
            })

        case GET_DATA_FAILURE:
            return ({
                ...state,
                isLoading: false,
                isError: true
            })

        case PROFILE_DATA_REQUEST:
            return ({
                ...state,
                isLoading: true,
                isError: false
            })

        case PROFILE_DATA_SUCCESS:
            return ({
                ...state,
                isLoading: false,
                isError: false,
                data: action.payload
            })

        case PROFILE_DATA_FAILURE:
            return ({
                ...state,
                isLoading: false,
                isError: true
            })

            case SCORE_DATA_REQUEST:
                return ({
                    ...state,
                    isLoading: true,
                    isError: false
                })
    
            case SCORE_DATA_SUCCESS:
                return ({
                    ...state,
                    isLoading: false,
                    isError: false,
                    data: action.payload
                })
    
            case SCORE_DATA_FAILURE:
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