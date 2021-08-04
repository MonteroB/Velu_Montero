import firebase from 'firebase/app';

import 'firebase/firestore';

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCDuYztVRrQ8pgM2p-Dqco86WQHbKrCK6Q",
    authDomain: "velu-app.firebaseapp.com",
    projectId: "velu-app",
    storageBucket: "velu-app.appspot.com",
    messagingSenderId: "74326212256",
    appId: "1:74326212256:web:cf96ac76bc04548c4d93c5"
  };

  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();;

  export const itemsCollection = firebase.firestore(app).collection("items");

  export const db = firebase.firestore(app);
  
  export const getFirestore = () => {
    return firebase.firestore(app);

}
