import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDleWS2bfTSHv7osVNnOIczI55MZ2zF3NM",
  authDomain: "prepwise-e49d4.firebaseapp.com",
  projectId: "prepwise-e49d4",
  storageBucket: "prepwise-e49d4.firebasestorage.app",
  messagingSenderId: "545816815854",
  appId: "1:545816815854:web:56fa84e72995efea3d6bff",
  measurementId: "G-K3CC6QJR2N"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);