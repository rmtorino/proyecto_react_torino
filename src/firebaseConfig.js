import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBKoPdL9-HoPGhG2iQ444SeIhAY6FVSWOc",
  authDomain: "proyecto-react-coderhous-73cc5.firebaseapp.com",
  projectId: "proyecto-react-coderhous-73cc5",
  storageBucket: "proyecto-react-coderhous-73cc5.appspot.com",
  messagingSenderId: "883421189315",
  appId: "1:883421189315:web:e780f2a6db54c9d5ed3e76",
};

const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app);
