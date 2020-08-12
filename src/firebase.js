import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyC7zilkJsiAPg3XC_TZTsZeajbskT_PBsw',
	authDomain: 'slack-clone-da499.firebaseapp.com',
	databaseURL: 'https://slack-clone-da499.firebaseio.com',
	projectId: 'slack-clone-da499',
	storageBucket: 'slack-clone-da499.appspot.com',
	messagingSenderId: '535021505200',
	appId: '1:535021505200:web:b9af8c4f2afb12abd00975',
	measurementId: 'G-9K0N5MDGWF',
};

// initializing the app
const firebaseApp = firebase.initializeApp(firebaseConfig);

// connecting to the database
const db = firebaseApp.firestore();

// making use of the authentication for Login system
const auth = firebase.auth();

// using google authentication for Login Access
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };          // import { auth, provider } from './firebase

export default db;                  // import db from './firebase
