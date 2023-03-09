import axios from "axios";

export const GET_DATA_REQUEST = "GET_DATA_REQUEST";
export const GET_DATA_SUCCESS = "GET_DATA_SUCCESS";
export const GET_DATA_FAILURE = "GET_DATA_FAILURE";


export const PROFILE_DATA_REQUEST = "PROFILE_DATA_REQUEST";
export const PROFILE_DATA_SUCCESS = "PROFILE_DATA_SUCCESS";
export const PROFILE_DATA_FAILURE = "PROFILE_DATA_FAILURE";


export const SCORE_DATA_REQUEST = "SCORE_DATA_REQUEST";
export const SCORE_DATA_SUCCESS = "SCORE_DATA_SUCCESS";
export const SCORE_DATA_FAILURE = "SCORE_DATA_FAILURE";

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



export const profileDataRequest = () => {
    return {
      type: PROFILE_DATA_REQUEST,
    };
  };
  
  export const profileDataSuccess = (data) => {
    return {
      type: PROFILE_DATA_SUCCESS,
      payload: data,
    };
  };
  
  export const profileDataFailure = (error) => {
    return {
      type: PROFILE_DATA_FAILURE,
      payload:error
    };
  };
  

  export const scoreDataRequest = ()=>{
    return({
        type:SCORE_DATA_REQUEST
    })
}



export const scoreDataSuccess = (data)=>{
    return({
        type:SCORE_DATA_SUCCESS,
        payload:data
    })
}



export const scoreDataFailure = ()=>{
    return({
        type:SCORE_DATA_FAILURE
    })
}




export const getData = (data)=>(dispatch)=>{

    dispatch(getDataRequest())
    return axios({
        method:"GET",
        url:"https://lazy-ruby-leopard-kilt.cyclic.app/dashboard/dashboard-details",
        headers:{
          'Authorization' : `Bearer ${data}`
        }

    })

    .then((res)=>{
 
        dispatch(getDataSuccess(res.data))
        
    })


    .then((error)=>{
        dispatch(getDataFailure())
    })
  
}


export const profileData = (data,token) => (dispatch) => {

    dispatch(profileDataRequest());
  
    return axios({
      method: "POST",
      url: "https://lazy-ruby-leopard-kilt.cyclic.app/dashboard/user-data-collection",
      headers:{
        'Authorization' : `Bearer ${token}`
      },
      data
    })
      .then((res) => {
        console.log("profile data res",res.data)
        dispatch(profileDataSuccess());
        
       
      })
  
      .catch((error) => {
        dispatch(profileDataFailure(error))

    });
};


export const scoreData = (data,token) => (dispatch) => {

  dispatch(scoreDataRequest());

  return axios({
    method: "POST",
    url: "https://lazy-ruby-leopard-kilt.cyclic.app/dashboard/user-applied",
    headers:{
      'Authorization' : `Bearer ${token}`
    },
    data
  })
    .then((res) => {
      console.log("score data res",res.data)
      dispatch(scoreDataSuccess());
     
     
    })

    .catch((error) => {
      dispatch(scoreDataFailure(error))

  });
};
