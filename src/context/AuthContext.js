import { addDoc, collection } from "@firebase/firestore";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { auth, db } from '../firebase';


const userAuthContext = createContext();

export function AuthContextProvider({ children }) {

    const [user, setUser] =useState('')
  const [qty, setQty] = useState(1);

  let navigate = useNavigate();



    const [prodPrice, setProdPrice] = useState(0);
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
  







  
    // Add to cart handler
  
    const addToCart = async (prod) => {
      let Product;
      if (user) {
        setQty(1);
        setProdPrice(prod.price);
        Product = prod;
        Product["qty"] = qty;
        Product["TotalProductPrice"] = qty * prodPrice;
  
        try {
          await addDoc(collection(db, "Cart" + user.uid), {
            prod,
          });
      
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      } else {
        navigate("/login");
      }
    };
  

    return (
        <userAuthContext.Provider
        value={{ user, signUp, logIn, logOut,googleSignIn, products, loading,addToCart }} >{children}</userAuthContext.Provider>
    )
  
}




export function useUserAuth() {
    return useContext(userAuthContext)
}