// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-real-estate-a1259.firebaseapp.com",
  projectId: "mern-real-estate-a1259",
  storageBucket: "mern-real-estate-a1259.appspot.com",
  messagingSenderId: "242678542352",
  appId: "1:242678542352:web:3e7c46e2fce9b5e87c5a95"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);