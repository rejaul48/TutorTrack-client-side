import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from './../firebase/firebase.config';
import axios from "axios";



// create context name with Tutor context
export const TutorContext = createContext()
export const auth = getAuth(app)

// context provider
const TutorProvider = ({ children }) => {

    // user handle state
    const [user, setUser] = useState([])
    // loader handle state
    const [loader, setLoader] = useState([])
    // my tutorial handle state
    const [myTutorials, setMyTutorials] = useState([])


    // toggle mode
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    // Function to toggle theme
    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme); // Persist the theme in localStorage
    };

    // Apply theme to body element when it changes
    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
    }, [theme]);

    // toggle mode 


    // login with google method
    const provider = new GoogleAuthProvider();

    const loginWithGoogle = () => {
        return signInWithPopup(auth, provider);
    }

    // login user logout/signout method
    const userLogOut = () => {
        signOut(auth)
            .then(() => {
                setUser(null);
            })
            .catch((err) => {
                console.error("Something went wrong:", err);
            });
    };

    // new user register method
    const newUserRegistration = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login register user from firebase
    const registerUserLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }


    // observer function for current user
    useEffect(() => {
        setLoader(true);
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log("Auth State Changed:", currentUser?.email);
            setUser(currentUser);

            if (currentUser?.email) {
                const user = { email: currentUser.email };

                axios.post('https://server-side-sable-sigma.vercel.app/jwt', user, { withCredentials: true })
                    .then(res => {
                        console.log(res.data)
                        setLoader(false);
                    })
            }
            else {
                axios.post('https://server-side-sable-sigma.vercel.app/logout', {}, {
                    withCredentials: true
                })
                    .then(res => {
                        console.log("Logout", res.data)
                        setLoader(false);
                    })
            }


        });
        return () => unsubscribe();
    }, []);

    const ContextValue = {
        user,
        setUser,
        loader,
        setLoader,
        loginWithGoogle,
        userLogOut,
        newUserRegistration,
        registerUserLogin,
        myTutorials,
        setMyTutorials,
        toggleTheme,
        theme,
        setTheme

    }

    return (
        <TutorContext.Provider value={ContextValue}>
            {children}
        </TutorContext.Provider>
    )

}

export default TutorProvider