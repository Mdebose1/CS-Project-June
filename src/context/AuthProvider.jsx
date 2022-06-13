import { useContext, useEffect, useState, createContext } from "react"
import { getAuth, signInWithPopup, createUserWithEmailAndPassword, setPersistence, browserLocalPersistence, onAuthStateChanged, GoogleAuthProvider, signOut, signInWithEmailAndPassword } from "firebase/auth"
import { setDoc, doc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";


export const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState({ loggedIn: false })

    const auth = getAuth()
    const provider = new GoogleAuthProvider();

    const register = ( formData ) => {
        console.log( formData );
        if (formData === formData.confirmPassword) {
            createUserWithEmailAndPassword(auth, formData.email, formData.password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log('Registration Successful!')
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // ..
                });
        }
    };

    const signIn = ( formData, providerOption ) => {
        const { email, password } = formData;

        switch ( providerOption ) {
            case 'google':
                signInWithPopup( auth, provider )
                    .then(result => {
                        console.log("You have been logged in.");
                    }); 
                break;

            case 'password':
                signInWithEmailAndPassword( auth, email.value, password.value )
                    .then((userCredential) => {
                        const user = userCredential.user;

                        console.log("You have been logged in.");
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                    });
                break;
            default:
                break

        }

        // .catch(err => console.log( err ))
    }

    const signOff = () => {
        signOut(auth)
            .then(() => {
                setCurrentUser({ loggedIn: false })
                console.log('You have logged out.')
            })
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setCurrentUser({
                    id: user.uid,
                    name: user.displayName,
                    image: user.photoURL,
                    email: user.email,
                    loggedIn: true
                })
            }
        })
    } , [ auth] );

    const context = {
        currentUser, signIn, signOff, register
    }


    return (
        <AuthContext.Provider value={context}>
            {children}
        </AuthContext.Provider>
    )
}
