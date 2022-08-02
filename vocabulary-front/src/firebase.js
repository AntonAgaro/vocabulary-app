import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyB_d_HkcwPsueXDtiD4J10yAVhB2BRG96Y",
    authDomain: "vocabulary-c69e0.firebaseapp.com",
    projectId: "vocabulary-c69e0",
    storageBucket: "vocabulary-c69e0.appspot.com",
    messagingSenderId: "27539156112",
    appId: "1:27539156112:web:d584e7e401e5c1b0ebfc15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;