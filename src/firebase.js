import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'



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
const app = initializeApp(firebaseConfig);

export default firebase