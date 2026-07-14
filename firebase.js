// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIU4rLBDbGbs23CNk9SHzyHclMSYRT208",
  authDomain: "next14-cc-d7d38.firebaseapp.com",
  projectId: "next14-cc-d7d38",
  storageBucket: "next14-cc-d7d38.firebasestorage.app",
  messagingSenderId: "124808819290",
  appId: "1:124808819290:web:6de14bdf5490cd72951e63"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);