import { 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
} from 'firebase/auth'

import { auth } from '../firebaseconfig';

export const loginAPI = (email, password) => {
    try{
        let response = signInWithEmailAndPassword(auth, email, password);
        return response;
    }
    catch (err) {
        alert(err.errors.message)
    }
    
};

export const RegisterAPI = (email, password) => {
    try{
        let response = createUserWithEmailAndPassword(auth, email, password);
        return response;
    }
    catch (err) {
        alert(err.errors.message)
    }
    
};

export const GoogleSignInAPI = (email, password) => {
    try{
        let googleAuthProvider = new GoogleAuthProvider();
        let res = signInWithPopup(auth, googleAuthProvider);
        return res;
    }
    catch (err) {
        alert(err.errors.message)
    }
    
};

export const onLogout = () => {
    try{
        signOut(auth);
    } catch (err){
        return err;
    }
}
