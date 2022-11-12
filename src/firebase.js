import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAZLxDaQtj3PGuS6wvO2m3h1LkDqnQnLCU",
    authDomain: "clone-8309f.firebaseapp.com",
    projectId: "clone-8309f",
    storageBucket: "clone-8309f.appspot.com",
    messagingSenderId: "150795544472",
    appId: "1:150795544472:web:710072600d38a0f7f16ded",
    measurementId: "G-6H0E1D5Y18"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};