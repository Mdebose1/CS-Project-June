import { initializeApp } from 'firebase/app';

import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC7NTcvwkC-IbFNH257cpViZFEaXXxFLGQ",
    authDomain: "react-capstone-a2abf.firebaseapp.com",
    projectId: "react-capstone-a2abf",
    storageBucket: "react-capstone-a2abf.appspot.com",
    messagingSenderId: "299935324500",
    appId: "1:299935324500:web:a9f9030749690ba2a310c1",
    measurementId: "G-E16BQBW57W"
}; 

export const firebase = initializeApp( firebaseConfig )
export const auth = getAuth( firebase )
export const db = getFirestore( firebase);
