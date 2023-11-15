// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCO7rYin1q2c7LZBzXwvAzJj1zhKPqmhOw",
    authDomain: "devweb-80e3f.firebaseapp.com",
    projectId: "devweb-80e3f",
    storageBucket: "devweb-80e3f.appspot.com",
    messagingSenderId: "124229082928",
    appId: "1:124229082928:web:38befb84c4325e9380b2f5",
    measurementId: "G-JZ5WLK6GS0"
  
};  
const app = initializeApp(firebaseConfig);
// Initialize Firebase
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}
export const analytics = isSupported().then(yes => yes ? getAnalytics(app) : null);
export const storageRef = firebase.storage().ref();
export {firebase};