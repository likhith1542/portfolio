import firebase from 'firebase'

const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyBs41osaOKBiHlTiw-clWjoz8BX_rzj-wU",
    authDomain: "portfolio-42f1a.firebaseapp.com",
    projectId: "portfolio-42f1a",
    storageBucket: "portfolio-42f1a.appspot.com",
    messagingSenderId: "266055684156",
    appId: "1:266055684156:web:12e33f0b281f055576b339"
  });

const db=firebaseApp.firestore();

export default db;