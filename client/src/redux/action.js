import axios from "axios";

export const GET_DATA_REQUEST = "GET_DATA_REQUEST";
export const GET_DATA_SUCCESS = "GET_DATA_SUCCESS";
export const GET_DATA_FAILURE = "GET_DATA_FAILURE";

export const POST_DATA_REQUEST = "POST_DATA_REQUEST";
export const POST_DATA_SUCCESS = "POST_DATA_SUCCESS";
export const POST_DATA_FAILURE = "POST_DATA_FAILURE";

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


export const postDataRequest = ()=>{
    return({
        type:POST_DATA_REQUEST
    })
}



export const postDataSuccess = ()=>{
    return({
        type:POST_DATA_SUCCESS
    })
}



export const postDataFailure = ()=>{
    return({
        type:POST_DATA_FAILURE
    })
}



export const getData = ()=>(dispatch)=>{

    dispatch(getDataRequest())
    return axios({
        method:"GET",
        url:""
    })

    .then((res)=>{
        dispatch(getDataSuccess(res.data))
    })

    .then((error)=>{
        dispatch(getDataFailure())
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
        dispatch(postDataSuccess())
    })

    .then((error)=>{
        dispatch(postDataFailure())
    })
}

