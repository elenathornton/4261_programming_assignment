import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDKA7ktcVO6dTTsE4GaJa3VQIBny6dA5w8',
  authDomain: 'pa-50acf.firebaseapp.com',
  databaseURL: 'https://mpa-50acf.firebaseio.com',
  projectId: 'pa-50acf',
  storageBucket: 'pa-50acf.appspot.com',
  messagingSenderId: '1074204011996',
  appId: '1:1074204011996:ios:c9dabc9cefe6a6c9ad7319',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
