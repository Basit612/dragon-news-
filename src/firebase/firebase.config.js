// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
console.log('INSIDE CONFIG', import.meta.env.VITE_PASS)
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: "dragon-news-a66eb.firebaseapp.com",
  projectId: "dragon-news-a66eb",
  storageBucket: "dragon-news-a66eb.appspot.com",
  messagingSenderId: "305995759336",
  appId: "1:305995759336:web:a997ac529e238e58ccd35d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;