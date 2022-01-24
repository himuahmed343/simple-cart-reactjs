// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBaSrZ-UOaD9S47JiuSHqtynyOgNGxp8Rk",
  authDomain: "simple-react-cart.firebaseapp.com",
  projectId: "simple-react-cart",
  storageBucket: "simple-react-cart.appspot.com",
  messagingSenderId: "1034735470337",
  appId: "1:1034735470337:web:f1f9ac4a561ae7fe667d00",
  measurementId: "G-99FX7Y9WHC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app; 