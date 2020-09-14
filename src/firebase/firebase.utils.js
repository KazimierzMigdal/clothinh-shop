import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDG40u7sI-0i5P68asjyaFp98GdxL9J1YU",
    authDomain: "clothing-shop-km.firebaseapp.com",
    databaseURL: "https://clothing-shop-km.firebaseio.com",
    projectId: "clothing-shop-km",
    storageBucket: "clothing-shop-km.appspot.com",
    messagingSenderId: "949609386622",
    appId: "1:949609386622:web:055acbd9eb1cc6203f3e2f",
    measurementId: "G-B34M619S7S"
};

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
