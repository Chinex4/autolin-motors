import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
	apiKey: 'AIzaSyBeKpx7NaLzd4t-j7WijdFlhSEHtfOnohY',
	authDomain: 'autolin-motors.firebaseapp.com',
	projectId: 'autolin-motors',
	storageBucket: 'autolin-motors.firebasestorage.app',
	messagingSenderId: '950741369177',
	appId: '1:950741369177:web:3e336a652f1f4d303e8c48',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
