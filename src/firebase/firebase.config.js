import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA-Oa0ppNSuSA0_MupGsBuraCiRaVe6Q2c",
  authDomain: "automotive-636cc.firebaseapp.com",
  projectId: "automotive-636cc",
  storageBucket: "automotive-636cc.appspot.com",
  messagingSenderId: "263484011090",
  appId: "1:263484011090:web:75838ede1ee31a1432658b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
