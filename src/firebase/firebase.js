import { initializeApp } from 'firebase/app';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAbnOqGBGID3NPzvxQc7_canURb32mpU-U",

    authDomain: "clone-5ba44.firebaseapp.com",
  
    projectId: "clone-5ba44",
  
    storageBucket: "clone-5ba44.appspot.com",
  
    messagingSenderId: "581029943409",
  
    appId: "1:581029943409:web:a4c0f08a920f30c03163d0",
  
    measurementId: "G-8YZL78WN6P"
  
})

const db = firebaseApp.firestore();
const auth = firebase.auth();

export  { auth }