import React, { useEffect, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import About from "./components/About";
import User from "./components/User";

import GithubContext from "./contexts/GitHub/githubContext";
function App() {
  const githubContext = useContext(GithubContext);
  useEffect(() => {
    githubContext.AllUsers();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/user/:uname" element={<User />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;