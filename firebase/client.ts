import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvcYvx6byLRlb7gQI1wY2nIeHnA0jz84Y",
  authDomain: "mockinterv-2bdda.firebaseapp.com",
  projectId: "mockinterv-2bdda",
  storageBucket: "mockinterv-2bdda.firebasestorage.app",
  messagingSenderId: "986215795348",
  appId: "1:986215795348:web:d3306604b85638041d4281",
  measurementId: "G-8RLKHX8JL3"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);