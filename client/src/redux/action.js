import axios from "axios";

export const SIGNIN_AUTH_REQUEST = "SIGNIN_AUTH_REQUEST";
export const SIGNIN_AUTH_SUCCESS = "SIGNIN_AUTH_SUCCESS";
export const SIGNIN_AUTH_FAILURE = "SIGNIN_AUTH_FAILURE";

export const POST_AUTH_REQUEST = "POST_AUTH_REQUEST";
export const POST_AUTH_SUCCESS = "POST_AUTH_SUCCESS";
export const POST_AUTH_FAILURE = "POST_AUTH_FAILURE";

export const GOOGLE_AUTH_REQUEST = "GOOGLE_AUTH_REQUEST";
export const GOOGLE_AUTH_SUCCESS = "GOOGLE_AUTH_SUCCESS";
export const GOOGLE_AUTH_FAILURE = "GOOGLE_AUTH_FAILURE";

export const PHONE_AUTH_REQUEST = "PHONE_AUTH_REQUEST";
export const PHONE_AUTH_SUCCESS = "PHONE_AUTH_SUCCESS";
export const PHONE_AUTH_FAILURE = "PHONE_AUTH_FAILURE";

export const VERIFY_AUTH_REQUEST = "VERIFY_AUTH_REQUEST";
export const VERIFY_AUTH_SUCCESS = "VERIFY_AUTH_SUCCESS";
export const VERIFY_AUTH_FAILURE = "VERIFY_AUTH_FAILURE";

export const EMAIL_AUTH_REQUEST = "EMAIL_AUTH_REQUEST";
export const EMAIL_AUTH_SUCCESS = "EMAIL_AUTH_SUCCESS";
export const EMAIL_AUTH_FAILURE = "EMAIL_AUTH_FAILURE";

export const VERIFY_EMAIL_AUTH_REQUEST = "VERIFY_EMAIL_AUTH_REQUEST";
export const VERIFY_EMAIL_AUTH_SUCCESS = "VERIFY_EMAIL_AUTH_SUCCESS";
export const VERIFY_EMAIL_AUTH_FAILURE = "VERIFY_EMAIL_AUTH_FAILURE";




export const signInAuthRequest = () => {
  return {
    type: SIGNIN_AUTH_REQUEST,
  };
};

export const signInAuthSuccess = (auth) => {
  return {
    type: SIGNIN_AUTH_SUCCESS,
    payload: auth,
  };
};

export const signInAuthFailure = (error) => {
  return {
    type: SIGNIN_AUTH_FAILURE,
    payload:error
  };
};

export const postDataRequest = () => {
  return {
    type: POST_AUTH_REQUEST,
  };
};

export const postDataSuccess = (auth) => {
  return {
    type: POST_AUTH_SUCCESS,
    payload: auth,
  };
};

export const postDataFailure = (error) => {
  return {
    type: POST_AUTH_FAILURE,
    payload:error
  };
};

export const googleDataRequest = () => {
  return {
    type: GOOGLE_AUTH_REQUEST,
  };
};

export const googleDataSuccess = (auth) => {
  return {
    type: GOOGLE_AUTH_SUCCESS,
    payload: auth,
  };
};

export const googleDataFailure = (error) => {
  return {
    type: GOOGLE_AUTH_FAILURE,
    payload:error
  };
};

export const phoneDataRequest = () => {
  return {
    type: PHONE_AUTH_REQUEST,
  };
};

export const phoneDataSuccess = (auth) => {
  return {
    type: PHONE_AUTH_SUCCESS,
    payload: auth,
  };
};

export const phoneDataFailure = (error) => {
  return {
    type: PHONE_AUTH_FAILURE,
    payload:error
  };
};

export const verifyDataRequest = () => {
  return {
    type: VERIFY_AUTH_REQUEST
  };
};

export const verifyDataSuccess = (auth) => {
  return {
    type: VERIFY_AUTH_SUCCESS,
    payload: auth,
  };
};

export const verifyDataFailure = (error) => {
  return {
    type: VERIFY_AUTH_FAILURE,
    payload:error
  };
};


export const emailDataRequest = () => {
  return {
    type: EMAIL_AUTH_REQUEST
  };
};

export const emailDataSuccess = (auth) => {
  return {
    type: EMAIL_AUTH_SUCCESS,
    payload: auth,
  };
};

export const emailDataFailure = (error) => {
  return {
    type: EMAIL_AUTH_FAILURE,
    payload:error
  };
};

export const verifyEmailDataRequest = () => {
  return {
    type: VERIFY_EMAIL_AUTH_REQUEST
  };
};

export const verifyEmailDataSuccess = (auth) => {
  return {
    type: VERIFY_EMAIL_AUTH_SUCCESS,
    payload: auth,
  };
};

export const verifyEmailDataFailure = (error) => {
  return {
    type: VERIFY_EMAIL_AUTH_FAILURE,
    payload:error
  };
};






export const signInAuth = (data) => (dispatch) => {
  dispatch(signInAuthRequest());
  return axios({
    method: "POST",
    url: "https://lazy-ruby-leopard-kilt.cyclic.app/auth/signin",
    data,
  })
    .then((res) => {
      dispatch(signInAuthSuccess(res.data));
   
      if(res.data.token.primaryToken){
        localStorage.setItem("accessToken",res.data.token.primaryToken);
        localStorage.setItem("displayName",res.data.token.fullName);
        localStorage.setItem("email",res.data.token.email);
      }

 
    })

    .catch((error) => {
      dispatch(signInAuthFailure(error));
    });
};

export const postData = (data) => (dispatch) => {
  dispatch(postDataRequest());

  return axios({
    method: "POST",
    url:"https://lazy-ruby-leopard-kilt.cyclic.app/user/signup",
    data
  })
    .then((res) => {
  
      dispatch(postDataSuccess(res.data.token.primaryToken));
     
      if(res.data.token.primaryToken){
        localStorage.setItem("accessToken",res.data.token.primaryToken);
        localStorage.setItem("displayName",res.data.userName);
        localStorage.setItem("email",res.data.email);
      }
    })

    .catch((error) => {
      dispatch(postDataFailure());
    });
};

export const googleAuth = (auth) => (dispatch) => {
  dispatch(googleDataRequest());
  try {
    dispatch(googleDataSuccess(auth));
  } catch (error) {
    dispatch(googleDataFailure(error));
  }
};

export const phoneAuth = (auth) => (dispatch) => {
  dispatch(phoneDataRequest());
  try {
    dispatch(phoneDataSuccess(auth));
  } catch (error) {
    dispatch(phoneDataFailure(error));
  }
};





export const verifyData = (data) => (dispatch) => {

  dispatch(verifyDataRequest());

  return axios({
    method: "POST",
    url: "https://lazy-ruby-leopard-kilt.cyclic.app/user/verify",
    data
  })
    .then((res) => {

      dispatch(verifyDataSuccess(res.data.token.primaryToken));
      if(res.data.token.primaryToken){
        localStorage.setItem("accessToken",res.data.token.primaryToken);
        localStorage.setItem("displayName",res.data.userName);
        localStorage.setItem("email",res.data.email);
      }
    })

    .catch((error) => {
     
      dispatch(verifyDataFailure(error));
      
    });

 
};



export const emailData = (data) => (dispatch) => {

  dispatch(emailDataRequest());

  return axios({
    method: "POST",
    url: "https://lazy-ruby-leopard-kilt.cyclic.app/auth/signin",
    data,
  })
    .then((res) => {
     
      dispatch(emailDataSuccess(res.data.token.primaryToken));
      if(res.data.token.primaryToken){
        localStorage.setItem("accessToken",res.data.token.primaryToken);
        localStorage.setItem("displayName",res.data.token.fullName);
        localStorage.setItem("email",res.data.email);
      }
    })

    .catch((error) => {
      dispatch(emailDataFailure(error));
    });
};


export const verifyEmailData = (data) => (dispatch) => {

  dispatch(verifyEmailDataRequest());

  return axios({
    method: "POST",
    url: "https://lazy-ruby-leopard-kilt.cyclic.app/auth/verifyotp",
    data,
  })
    .then((res) => {
   
      dispatch(verifyEmailDataSuccess(res.data.token.primaryToken));
      if(res.data.primaryToken){
        localStorage.setItem("accessToken", res.data.token.primaryToken);
        localStorage.setItem("displayName", res.data.token.fullName);
        localStorage.setItem("email",data.email);
       
      }
    
    })

    .catch((error) => {
      dispatch(verifyEmailDataFailure(error));
    });
};