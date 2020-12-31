import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyACjSxfagvfrsJYxV7p6NFStKnjFITfzco",
    databaseURL: "https://laptrinhweb-689a1-default-rtdb.firebaseio.com",
    authDomain: "laptrinhweb-689a1.firebaseapp.com",
    projectId: "laptrinhweb-689a1",
    storageBucket: "laptrinhweb-689a1.appspot.com",
    messagingSenderId: "661725409993",
    appId: "1:661725409993:web:756934347c6f8d78c49318",
    measurementId: "G-KEMN6Q3N4J"
  };
 firebase.initializeApp(firebaseConfig);
 var db=firebase.firestore(); 

const storage =firebase.storage();
export {storage,db ,firebase as default};