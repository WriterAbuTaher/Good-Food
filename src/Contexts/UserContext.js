import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Authentication/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const UserContext = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    // create new user
    const registerEmailAndPassword = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // update user profile
    const updateUserProfile = (profile) => {
        setLoading(true);
        return updateProfile(auth.currentUser, profile);
    };

    // google sign in
    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    // github sign in
    const githubSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    };

    // signInWithEmailAndPassword
    const loginWithEmailAndPassword = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // sign out
    const logOut = () => {
        setLoading(true);
        return signOut(auth)
            .then(() => { })
            .catch((err) => { console.error(err) });
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (current) => {
            setUser(current);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    console.log(user);

    return (
        <AuthContext.Provider
            value={{ user, registerEmailAndPassword, updateUserProfile, googleSignIn, githubSignIn, loginWithEmailAndPassword, logOut, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;