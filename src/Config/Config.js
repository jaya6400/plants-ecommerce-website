import firebase from 'firebase/app'

import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCQu2peLSkM-OKXD5buZgI64b8dtME6CgY",
  authDomain: "ecommerceapp-shopnow.firebaseapp.com",
  projectId: "ecommerceapp-shopnow",
  storageBucket: "ecommerceapp-shopnow.appspot.com",
  messagingSenderId: "1069742389636",
  appId: "1:1069742389636:web:270cd93916fbb9967445d1",
  measurementId: "G-YVQQEV39D7"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage }