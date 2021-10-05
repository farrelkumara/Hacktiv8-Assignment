import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Interests from "./components/Interest";
import Awards from "./components/Awards";
import Footer from "./components/Footer";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="container">
          <Route path="/about">
            <About />
          </Route>
          <Route path="/experience">
            <Experience />
          </Route>
          <Route path="/education">
            <Education />
          </Route>
          <Route path="/skills">
            <Skills />
          </Route>
          <Route path="/interests">
            <Interests />
          </Route>
          <Route path="/awards">
            <Awards />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
