// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyeB7EhrDNWNDOyxmgBRJpjo6eMachNvI",
  authDomain: "chat-app-free.firebaseapp.com",
  projectId: "chat-app-free",
  storageBucket: "chat-app-free.appspot.com",
  messagingSenderId: "791497133152",
  appId: "1:791497133152:web:f304d694692f39c9688705",
  measurementId: "G-1VS1EHS447",
};

// Initialize Firebase
const App = initializeApp(firebaseConfig);
const Auth = getAuth(App);

export { App, Auth };
