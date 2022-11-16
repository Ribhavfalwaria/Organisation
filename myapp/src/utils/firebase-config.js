// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3gk1e8zc1IUpgy2J5bqTyT8EkadT-w2w",
  authDomain: "react-netflix-clone-dc712.firebaseapp.com",
  projectId: "react-netflix-clone-dc712",
  storageBucket: "react-netflix-clone-dc712.appspot.com",
  messagingSenderId: "676889399316",
  appId: "1:676889399316:web:eded2e07e85190c49f9701",
  measurementId: "G-MCVDFV60QD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);