import firebase from 'firebase';
const config = {
  apiKey: 'AIzaSyDcdV8eMrENAMtm7P2kjuvr98zxoavmJXY',
  authDomain: 'flatstack-office.firebaseapp.com',
  databaseURL: 'https://flatstack-office.firebaseio.com',
  projectId: 'flatstack-office',
  storageBucket: 'flatstack-office.appspot.com',
  messagingSenderId: '339206119155',
};
firebase.initializeApp(config);
export const authRef = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
export default firebase;
