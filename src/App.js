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
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" width="100%" height="100%">
          <path fill="#0f2027" fillOpacity="1" d="M0,64L24,90.7C48,117,96,171,144,192C192,213,240,203,288,197.3C336,192,384,192,432,170.7C480,149,528,107,576,112C624,117,672,171,720,165.3C768,160,816,96,864,101.3C912,107,960,181,1008,208C1056,235,1104,213,1152,176C1200,139,1248,85,1296,85.3C1344,85,1392,139,1416,165.3L1440,192L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path>


</svg>

        </AuthContextProvider>
      </Router>
    </>
  );
}

export default App;
