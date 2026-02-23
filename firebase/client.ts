// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgi88quQkLPo0K3oPvJfFY-vsbeSHdmV8",
  authDomain: "aceview-32ca4.firebaseapp.com",
  projectId: "aceview-32ca4",
  storageBucket: "aceview-32ca4.firebasestorage.app",
  messagingSenderId: "626269846452",
  appId: "1:626269846452:web:d2522e5a51fc0a857fd0e1",
  measurementId: "G-741H04YKYZ"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app)

