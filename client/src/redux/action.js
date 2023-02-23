import axios from "axios";

export const GET_AUTH_REQUEST = "GET_AUTH_REQUEST";
export const GET_AUTH_SUCCESS = "GET_AUTH_SUCCESS";
export const GET_AUTH_FAILURE = "GET_AUTH_FAILURE";

export const POST_AUTH_REQUEST = "POST_AUTH_REQUEST";
export const POST_AUTH_SUCCESS = "POST_AUTH_SUCCESS";
export const POST_AUTH_FAILURE = "POST_AUTH_FAILURE";

export const GET_DATA_REQUEST = "GET_DATA_REQUEST";
export const GET_DATA_SUCCESS = "GET_DATA_SUCCESS";
export const GET_DATA_FAILURE = "GET_DATA_FAILURE";

export const getAuthRequest = ()=>{
    return({
        type:GET_AUTH_REQUEST
    })
}



export const getAuthSuccess = (auth)=>{
    return({
        type:GET_AUTH_SUCCESS,
        payload:auth
    })
}



export const getAuthFailure = ()=>{
    return({
        type:GET_AUTH_FAILURE
    })
}


export const postDataRequest = ()=>{
    return({
        type:POST_AUTH_REQUEST
    })
}



export const postDataSuccess = (auth)=>{
    return({
        type:POST_AUTH_SUCCESS,
        payload:auth
    })
}



export const postDataFailure = ()=>{
    return({
        type:POST_AUTH_FAILURE
    })
}



export const getAuth = ()=>(dispatch)=>{

    dispatch(getAuthRequest())
    return axios({
        method:"GET",
        url:""
    })

    .then((res)=>{
        dispatch(getAuthSuccess(res.data))
    })

    .then((error)=>{
        dispatch(getAuthFailure())
    })
}



export const postData = (data)=>(dispatch)=>{

    dispatch(postDataRequest())

    return axios({
        method:"POST",
        url:"",
        data
    })

    .then((res)=>{
        dispatch(postDataSuccess(res.data))
    })

    .then((error)=>{
        dispatch(postDataFailure())
    })
}




export const getDataRequest = ()=>{
    return({
        type:GET_DATA_REQUEST
    })
}



export const getDataSuccess = (data)=>{
    return({
        type:GET_DATA_SUCCESS,
        payload:data
    })
}



export const getDataFailure = ()=>{
    return({
        type:GET_DATA_FAILURE
    })
}

export const getData = ()=>(dispatch)=>{

    dispatch(getDataRequest())
    return axios({
        method:"GET",
        url:"http://localhost:8080/dashboard/course-details"
    })

    .then((res)=>{
        dispatch(getDataSuccess(res.data))
    })

    .then((error)=>{
        dispatch(getDataFailure())
    })
}