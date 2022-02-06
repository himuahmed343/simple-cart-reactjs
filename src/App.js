import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import { AuthContextProvider } from "./context/AuthContext";

import Cart from "./pages/Cart/Cart";
import Home from './pages/Home/Home';
import ProductDetails from "./pages/ProductDetails/ProductDetails";


function App() {

  
  return (
    <>
      <Router>
        <AuthContextProvider>
        <Header />

        <Routes>
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<SignUp />} />
   
            <Route path="/" element={<Home />} />

            <Route exact path="*" element={<div>404 - Not Found Any Page</div>} />

            <Route path="/product/:productTitle" element={<ProductDetails />} />

            <Route path="/cart" element={<Cart />} />
        </Routes>

        </AuthContextProvider>
      </Router>
    </>
  );
}

export default App;
