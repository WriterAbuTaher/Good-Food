// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCbxYbsnGJrQKBOOK0W20JX0ldWi9Sd5zI",
    authDomain: "good-food-pro.firebaseapp.com",
    projectId: "good-food-pro",
    storageBucket: "good-food-pro.appspot.com",
    messagingSenderId: "189694254889",
    appId: "1:189694254889:web:4e8e7dd0260c7fcd7be138"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;