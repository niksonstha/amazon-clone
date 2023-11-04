import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Checkout from "./screens/Checkout";
import Home from "./screens/Home";
import Login from "./screens/Login";

function HeaderContainer() {
  const location = useLocation();
  const isHeaderVisible = location.pathname !== "/login";
  return isHeaderVisible && <Header />;
}

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <HeaderContainer />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
