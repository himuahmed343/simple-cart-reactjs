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
          <path fill="#000000" fill-opacity="1" d="M0,96L26.7,117.3C53.3,139,107,181,160,213.3C213.3,245,267,267,320,245.3C373.3,224,427,160,480,128C533.3,96,587,96,640,128C693.3,160,747,224,800,218.7C853.3,213,907,139,960,138.7C1013.3,139,1067,213,1120,240C1173.3,267,1227,245,1280,224C1333.3,203,1387,181,1413,170.7L1440,160L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path>

</svg>

        </AuthContextProvider>
      </Router>
    </>
  );
}

export default App;
