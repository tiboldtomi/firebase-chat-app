import { initializeApp } from 'firebase';
import { firebaseConfig } from '../constants';

const useFirebase = initializeApp(firebaseConfig);

export default useFirebase;