// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBWaPrRucAj2SnOMNZbkS8xioOrw9dixU",
  authDomain: "ethanmax-816e7.firebaseapp.com",
  projectId: "ethanmax-816e7",
  storageBucket: "ethanmax-816e7.firebasestorage.app",
  messagingSenderId: "255008808163",
  appId: "1:255008808163:web:9acc71fbc8c6ca8836f9d6",
  measurementId: "G-ZTVF38RM1W"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
