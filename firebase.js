// Import the functions you need from the SDKs you need
import { initializeApp , getApp, getApps} from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBg_58iYrZYxJ-rs9Ka-ZtfPg60YMGCEz4",
    authDomain: "netflix-fc96c.firebaseapp.com",
    projectId: "netflix-fc96c",
    storageBucket: "netflix-fc96c.appspot.com",
    messagingSenderId: "1086873114508",
    appId: "1:1086873114508:web:11b0e38831a98f6ad4a8a9"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp() ;
const db = getFirestore();
const auth = getAuth();

export {app,db,auth}
