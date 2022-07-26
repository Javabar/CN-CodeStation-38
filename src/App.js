import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";

import Login from "./pages/login";
import Feed from "./pages/feed";
import About from "./pages/about";
import Contact from "./pages/contact";
import Account from "./pages/account";
import Header from "./pageComponents/header1/header";
import Footer from "./pageComponents/footer1/footer";

import { useState } from "react";

import "./css/app.css";

const App = () => {
  const [user, setUser] = useState();
  return (
    <div className="AppStyles">
      {user && <Header />}
      <BrowserRouter>
        {user && <Navbar />}
        <Routes>
          <Route path="/" element={<Login setter={setUser} user={user} />} />

          <Route path="/about" element={<About />} />
          <Route path="/account" element={<Account />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/feed" element={<Feed />} />

          <Route
            path="/account"
            element={<Account setter={setUser} user={user} />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
