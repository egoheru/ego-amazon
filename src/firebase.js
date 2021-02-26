import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCJ45-9snwTxCDk-CTFjpbaLQ8rKJs0b-g",
    authDomain: "ego-53f33.firebaseapp.com",
    projectId: "ego-53f33",
    storageBucket: "ego-53f33.appspot.com",
    messagingSenderId: "823330065259",
    appId: "1:823330065259:web:7f24c822fdc129c5c89a2e"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };