import { createContext, useContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut,GoogleAuthProvider, signInWithPopup} from "firebase/auth"

import {auth} from '../firebase'

const userAuthContext = createContext();

export function AuthContextProvider({ children }) {

    const [user, setUser] =useState('')

    function signUp(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    function logIn(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }
    function googleSignIn() {
        const googleAuthProvider = new GoogleAuthProvider()
        return signInWithPopup(auth, googleAuthProvider)
    }
    function logOut() {
        signOut(auth)
    }


    //Get Products

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const getProducts = async () => {
      try {
        setLoading(true);
        const productsCall = await fetch("https://fakestoreapi.com/products")
          .then((response) => response.json())
          .then((data) => data)
          .catch((err) => {
            console.error(err);
          });
        setLoading(false);
        setProducts(productsCall);
      } catch (err) {
        console.error(err);
      }
    };
    useEffect(() => {
      getProducts();
    }, [user]);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            // console.log("Auth", currentUser);

            setUser(currentUser)
        }
   
        )
        return () => {
            unsubscribe()
        }
    }, [])
    // console.log("products:", products);

    return (
        <userAuthContext.Provider
        value={{ user, signUp, logIn, logOut,googleSignIn, products, loading }} >{children}</userAuthContext.Provider>
    )
  
}




export function useUserAuth() {
    return useContext(userAuthContext)
}