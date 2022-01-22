import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
function App() {
  return (
    <>
      <Router>
      <Header />

        <Routes>
          <Route path="/" element={<Home />}>
            
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
