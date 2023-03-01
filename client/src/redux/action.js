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

export const signInAuthFailure = () => {
  return {
    type: SIGNIN_AUTH_FAILURE,
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

export const postDataFailure = () => {
  return {
    type: POST_AUTH_FAILURE,
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

export const googleDataFailure = () => {
  return {
    type: GOOGLE_AUTH_FAILURE,
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

export const phoneDataFailure = () => {
  return {
    type: PHONE_AUTH_FAILURE,
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
    payload:auth,
  };
};

export const verifyDataFailure = () => {
  return {
    type: VERIFY_AUTH_FAILURE
  };
};


export const signInAuth = (data) => (dispatch) => {
  dispatch(signInAuthRequest());
  return axios({
    method: "POST",
    url: "https://team8-backend-production.up.railway.app/auth/signin",
    data,
  })
    .then((res) => {
      dispatch(signInAuthSuccess(res.data));
      console.log("signin Token check",res.data)
      localStorage.setItem("accessToken",res.data.Primarytoken)
      localStorage.setItem("displayName",res.data.full_name)
      localStorage.setItem("email",res.data.email)
    })

    .then((error) => {
      dispatch(signInAuthFailure());
    });
};

export const postData = (data) => (dispatch) => {
  dispatch(postDataRequest());

  return axios({
    method: "POST",
    url: "http://localhost:8080/user/signup",
    data,
  })
    .then((res) => {
      dispatch(postDataSuccess(res.data));
    })

    .then((error) => {
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
    method:"POST",
    url:"http://localhost:8080/user/verify",
    data,
  })
    .then((res) => {
      dispatch(verifyDataSuccess(res.data));
    })

    .then((error) => {
      dispatch(verifyDataFailure());
    });
};

