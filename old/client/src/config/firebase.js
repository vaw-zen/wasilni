// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"

import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyBjyVXnCIuYSFRK_aH6_PcHEh4z4MBzhZU",
  authDomain: "app1-f6315.firebaseapp.com",
  projectId: "app1-f6315",
  storageBucket: "app1-f6315.appspot.com",
  messagingSenderId: "775139999487",
  appId: "1:775139999487:web:d5a631f727d33382ded6ca",
  measurementId: "G-1L7GTMD6EN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app)
