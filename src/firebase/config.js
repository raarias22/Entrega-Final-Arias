import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyD6psps4AWOYvrB-p2k81Bg6NpufM7M-Fc",
    authDomain: "harmonys-61ec9.firebaseapp.com",
    projectId: "harmonys-61ec9",
    storageBucket: "harmonys-61ec9.appspot.com",
    messagingSenderId: "490955068991",
    appId: "1:490955068991:web:fbe39db4d5414b05820a8a"
};


const app = initializeApp(firebaseConfig);
export const initFirestore = () => app

export const db = getFirestore (app);