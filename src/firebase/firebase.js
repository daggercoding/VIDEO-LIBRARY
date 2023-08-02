
import { initializeApp } from "firebase/app";
import {getFirestore,collection} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAvJ9fro-nZ1jaqV4YhaySDhbQ5_vdr6qI",
  authDomain: "filmyverse-19653.firebaseapp.com",
  projectId: "filmyverse-19653",
  storageBucket: "filmyverse-19653.appspot.com",
  messagingSenderId: "1013791870612",
  appId: "1:1013791870612:web:e08401cd1832027d9a2e81"
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const dataBase= getFirestore(app);
export const moviesRef=collection(dataBase,"movies");
export const reviewsRef=collection(dataBase,"reviews");
export default app;