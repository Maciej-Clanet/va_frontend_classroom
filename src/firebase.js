
import { initializeApp } from "firebase/app"; 
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBEYsSvmiDRJ3W57ofafN4Oja5J8WJeeI8",
  authDomain: "artisan-valley-b7eb2.firebaseapp.com",
  projectId: "artisan-valley-b7eb2",
  storageBucket: "artisan-valley-b7eb2.appspot.com",
  messagingSenderId: "629314389297",
  appId: "1:629314389297:web:ac917750406453dfc55c10"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  const auth = getAuth(app)
export default app;