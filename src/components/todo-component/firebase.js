// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseApp =  initializeApp({
  apiKey: "AIzaSyBl67UYtIBiO3AzMdeRq1WijiNO_xGQt64",
  authDomain: "my-working-space-fb694.firebaseapp.com",
  projectId: "my-working-space-fb694",
  storageBucket: "my-working-space-fb694.appspot.com",
  messagingSenderId: "482022042107",
  appId: "1:482022042107:web:3a6bd2e04a5b2f6d8c035e"
});




// Initialize Firebase
const db = getFirestore(firebaseApp)
export {db}