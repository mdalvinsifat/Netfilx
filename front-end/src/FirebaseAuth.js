// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC30X8u7nNUQxU61qFjdIELL53l4x4XUL0",
  authDomain: "netfilx-clone-b16fa.firebaseapp.com",
  projectId: "netfilx-clone-b16fa",
  storageBucket: "netfilx-clone-b16fa.appspot.com",
  messagingSenderId: "295981063159",
  appId: "1:295981063159:web:854011d646c5d6907decf2",
  measurementId: "G-N62CKZDDVS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth