


import {initializeApp} from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBFaIudnhY_Hp1dWT8_Sh36UbnLWrvToBo",
  authDomain: "prepleaf-masai.firebaseapp.com",
  projectId: "prepleaf-masai",
  storageBucket: "prepleaf-masai.appspot.com",
  messagingSenderId: "656267351017",
  appId: "1:656267351017:web:42c6aa82496b898f957178",
  measurementId: "G-KVVGG750E2"
};



  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider()
  export {auth, provider};