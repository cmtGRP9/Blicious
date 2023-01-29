import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const config = {
	apiKey: "AIzaSyAH_ZDYkBsadZz9bDp0kRgLliWeDvGYToA",
	authDomain: "blicious-19338.firebaseapp.com",
	projectId: "blicious-19338",
	storageBucket: "blicious-19338.appspot.com",
	messagingSenderId: "446830596356",
	appId: "1:446830596356:web:6337966703c7b0ce420051",
	databaseURL: "https://blicious-19338-default-rtdb.asia-southeast1.firebasedatabase.app",
	measurementId: "G-JFGBF2351V"
};

export const app = firebase.initializeApp(config);
export const auth = app.auth();
export const db = firebase.firestore();
export const firestore = firebase.firestore;
export const increment = firebase.firestore.FieldValue.increment(1);
export const storage = firebase.storage();
export default app;
