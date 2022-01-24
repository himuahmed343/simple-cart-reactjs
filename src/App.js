import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import { AuthContextProvider } from "./context/AuthContext";
import Home from './pages/Home/Home';
function App() {
  return (
    <>
      <Router>
      <Header />
<AuthContextProvider>
        <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />


          <Route exact path="*" element={<div>404 - Not Found Any Page</div>} />

            
        </Routes>

        </AuthContextProvider>
      </Router>
    </>
  );
}

export default App;
