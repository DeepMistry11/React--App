// jshint esversion:6

import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDhsumBK7InI2LGV1LXxdwNzeU8ey77nwM",
  authDomain: "app-react-47234.firebaseapp.com",
  databaseURL: "https://app-react-47234.firebaseio.com",
  projectId: "app-react-47234",
  storageBucket: "app-react-47234.appspot.com",
  messagingSenderId: "1045534966948",
  appId: "1:1045534966948:web:dfad48529973cb9d975231",
  measurementId: "G-GQDB4Y2FQH",
});
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
