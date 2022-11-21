import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDb_1dytGJNRsNhHvh-Vrw0_nnzPQdcRck",
  authDomain: "amazn-clone-87f56.firebaseapp.com",
  projectId: "amazn-clone-87f56",
  storageBucket: "amazn-clone-87f56.appspot.com",
  messagingSenderId: "799416009733",
  appId: "1:799416009733:web:40a160e3ed5f05eacdc86c",
  measurementId: "G-EHV8QD29NZ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};