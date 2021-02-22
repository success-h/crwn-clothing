import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyA3JoLtVf6b1MxpAeRYySUZcBMS5W1_WFo',
  authDomain: 'crown-db-62b27.firebaseapp.com',
  projectId: 'crown-db-62b27',
  storageBucket: 'crown-db-62b27.appspot.com',
  messagingSenderId: '696993104625',
  appId: '1:696993104625:web:80ac31da6dd2df5f211f50',
  measurementId: 'G-WYBVZ8BGDV',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
