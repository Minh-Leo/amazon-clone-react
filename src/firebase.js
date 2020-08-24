import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyA5beqnA_9kfnwjn1cD7BxZ0fSQa0-MTDU',
  authDomain: 'clone-3fd43.firebaseapp.com',
  databaseURL: 'https://clone-3fd43.firebaseio.com',
  projectId: 'clone-3fd43',
  storageBucket: 'clone-3fd43.appspot.com',
  messagingSenderId: '927030800683',
  appId: '1:927030800683:web:513c527f207224c023556e',
  measurementId: 'G-W4Z6FY90NQ',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
