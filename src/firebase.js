import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA1JX7lBAIxEmAV1qzNYkIu4iW3ZdwOwnQ",
    authDomain: "allaboutcars-d0f4f.firebaseapp.com",
    projectId: "allaboutcars-d0f4f",
    storageBucket: "allaboutcars-d0f4f.appspot.com",
    messagingSenderId: "632235497482",
    appId: "1:632235497482:web:32556fe76b76f5229067f3",
    measurementId: "G-Q7XYMYEC8D"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;