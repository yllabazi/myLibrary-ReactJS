import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyA1PqseE9umXJ9UpVSA749DDc0e9HBXx9c",
  authDomain: "mylibrary-aff2f.firebaseapp.com",
  databaseURL: "https://mylibrary-aff2f.firebaseio.com",
  projectId: "mylibrary-aff2f",
  storageBucket: "mylibrary-aff2f.appspot.com",
  messagingSenderId: "39131130010",
  appId: "1:39131130010:web:e7c343dc7f402e93b09723",
  measurementId: "G-T22LTTM10P"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export default db;