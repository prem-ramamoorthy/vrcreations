// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; 

const firebaseConfig = {
  apiKey: "AIzaSyDCKcDFC0CAsmYw1FwgXz1C7Jnc5CZUKmM",
  authDomain: "vrcreations-fdee8.firebaseapp.com",
  projectId: "vrcreations-fdee8",
  storageBucket: "vrcreations-fdee8.firebasestorage.app",
  messagingSenderId: "805712584489",
  appId: "1:805712584489:web:efe792ac395a55ed2f2138",
  measurementId: "G-869YP7WE8F"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);