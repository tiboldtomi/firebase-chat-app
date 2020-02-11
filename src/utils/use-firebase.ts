import 'firebase/auth';
import firebase from 'firebase/app';
import 'firebase/firebase-firestore';
import { firebaseConfig } from '../constants';

class Firebase {
    public auth: firebase.auth.Auth;
    public db: firebase.firestore.Firestore;

    public constructor() {
        firebase.initializeApp(firebaseConfig);
        this.auth = firebase.auth();
        this.db = firebase.firestore();
    }

    public isInitialized = () => {
        return new Promise(resolve => {
            this.auth.onAuthStateChanged(resolve);
        });
    }

    public login = (email: string, password: string) => {
        return this.auth.signInWithEmailAndPassword(email, password);
    }

    public logout = () => {
        return this.auth.signOut();
    }

    public register = async (username: string, email: string, password: string) => {
        await this.auth.createUserWithEmailAndPassword(email, password);
        return this.auth.currentUser?.updateProfile({
            displayName: username
        });
    }

    public sendPasswordResetEmail = (email: string) => {
        return this.auth.sendPasswordResetEmail(email);
    }

    public loginSocialMedia = (platform: ('Facebook' | 'GitHub' | 'Google')) => {
        const provider = platform === 'Facebook'
            ? new firebase.auth.FacebookAuthProvider()
            : platform === 'Google'
                ? new firebase.auth.GoogleAuthProvider()
                : new firebase.auth.GithubAuthProvider();
        return this.auth.signInWithPopup(provider);
    }
};

const firebaseInstance = new Firebase();

const useFirebase = () => firebaseInstance;

export default useFirebase;