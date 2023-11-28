
import { initializeApp } from 'firebase/app'
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyC6YtgLj8jGyM_V5WJl6xqyJgfIF33IVcU",
    authDomain: "fir-exponative.firebaseapp.com",
    projectId: "fir-exponative",
    storageBucket: "fir-exponative.appspot.com",
    messagingSenderId: "1071408420831",
    appId: "1:1071408420831:web:6fc2110986ff6c66a5566a"
};

// // Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig)
export const FIREBASE_AUTH = getAuth(FIREBASE_APP)
export const FIREBASE_DB = getFirestore(FIREBASE_APP)