// Import the functions you need from the SDKs you need
import { initializeApp, firebase } from "firebase/app";
import 'firebase/firestore'
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsUb8niOSTK_RazfQ9K0EMDBRpR7Fs8j8",
  authDomain: "ie-carlos-wiesse.firebaseapp.com",
  projectId: "ie-carlos-wiesse",
  storageBucket: "ie-carlos-wiesse.appspot.com",
  messagingSenderId: "115724572250",
  appId: "1:115724572250:web:29fd59997240f943ceaa63",
  measurementId: "G-RCG8DQR5SN"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app)

//export const db = app.firestore();
