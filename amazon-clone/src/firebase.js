import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
	apiKey: 'AIzaSyCgUhIDfNc256lHk0l7OAnOkbD54XhnIHI',
	authDomain: 'clone-2b55b.firebaseapp.com',
	databaseURL: 'https://clone-2b55b.firebaseio.com',
	projectId: 'clone-2b55b',
	storageBucket: 'clone-2b55b.appspot.com',
	messagingSenderId: '963448119030',
	appId: '1:963448119030:web:4fb76d9d9141e4dcc796d7',
	measurementId: 'G-P1J5QKZM8Q',
});

// const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
