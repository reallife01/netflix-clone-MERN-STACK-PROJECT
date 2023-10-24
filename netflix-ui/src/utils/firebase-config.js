import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC_0U_wOn8lL5cpL-FIdS2yfQ2PNEWzbMg",
  authDomain: "react-netflix-f3e48.firebaseapp.com",
  projectId: "react-netflix-f3e48",
  storageBucket: "react-netflix-f3e48.appspot.com",
  messagingSenderId: "351572793177",
  appId: "1:351572793177:web:691c02bba399e0eee1de48",
  measurementId: "G-61QCS0QTVF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
