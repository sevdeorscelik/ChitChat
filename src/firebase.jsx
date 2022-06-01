import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/database'
import 'firebase/compat/storage'
import { initializeApp } from 'firebase/app';



const firebaseConfig = {
    apiKey: "AIzaSyDnfE_KOnX61JSW3lmAve7d1wbTEd8OkWQ",
    authDomain: "chitchat-ab7ba.firebaseapp.com",
    projectId: "chitchat-ab7ba",
    storageBucket: "chitchat-ab7ba.appspot.com",
    messagingSenderId: "671934991634",
    appId: "1:671934991634:web:ef6c09c97580d4607037cb",
    measurementId: "G-8K635SGK64"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase