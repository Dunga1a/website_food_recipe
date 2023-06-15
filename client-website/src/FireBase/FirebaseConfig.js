// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBIWhz3q-r1LSM2oGtUnOmsPgBlLGv-4ZI",
    authDomain: "news-website-61469.firebaseapp.com",
    projectId: "news-website-61469",
    storageBucket: "news-website-61469.appspot.com",
    messagingSenderId: "636730168936",
    appId: "1:636730168936:web:4eb4f4cc1eb5d4046b4ddd",
    measurementId: "G-3NTXMC46WC",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
export { auth, provider };
