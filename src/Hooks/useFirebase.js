import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, GithubAuthProvider } from "firebase/auth";
import { useEffect, useState } from "react";
import initializaAuthentication from "../Pages/Login/Firebase/Firebase.init";

initializaAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();

    const signInUsingGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();

        signInWithPopup(auth, googleProvider)
        .then(result => {
            setUser(result.user);
        })
        .finally(() => setIsLoading(false));
    };

    const signInUsingGitHub = () => {
        setIsLoading(true);
        const GitHubProvider = new GithubAuthProvider();
        signInWithPopup(auth,GitHubProvider)
        .then(result => {
            setUser(result.user);
        })
        .finally(() => setIsLoading(false));
    }

    useEffect( () => {
        const unsubscribed = onAuthStateChanged(auth, user =>  {
            if(user)  {
                setUser(user);
            }
            else{
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    },[auth])

    const logOut = () => {
        signOut(auth)
        .then(()=> { })
        .finally(() => setIsLoading(false));

    }
    return {
        user,
        isLoading,
        signInUsingGoogle,
        logOut,
        signInUsingGitHub

    }
}

export default useFirebase;