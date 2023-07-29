// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import { getAnalytics } from "firebase/analytics";
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBbxmMisZ6J8Dv4qyi8RIJU-rp41QItqY",
  authDomain: "deptamia-4dab5.firebaseapp.com",
  projectId: "deptamia-4dab5",
  storageBucket: "deptamia-4dab5.appspot.com",
  messagingSenderId: "804296675102",
  appId: "1:804296675102:web:f83e0b4065f0378b9b430f",
  measurementId: "G-PW8R1ZK4T7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore();
export const storage=getStorage(app)