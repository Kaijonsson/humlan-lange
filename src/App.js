import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { useMediaQuery } from "react-responsive";

import HomeDesktop from "./desktop/views/home/HomeDesktop";
import HomeMobile from "./mobileAndTablet/views/home/HomeMobile";
import CV from "./desktop/views/cv/CV";
import Contact from "./desktop/views/contact/Contact";
import Footer from "./mobileAndTablet/components/Footer";
import About from "./mobileAndTablet/views/about/About";
import HeaderMobile from "./mobileAndTablet/components/HeaderMobile";
import HeaderDesktop from "./desktop/components/HeaderDesktop";
import Texts from "./desktop/views/texts/Texts";


function App() {
  const desktop = useMediaQuery({ query: "(min-width: 1001px)" });
  const phoneOrTablet = useMediaQuery({ query: "(max-width: 1000px)" });

  return (
    <div id="App" >
      <Router>
        <div>
          {desktop && <HeaderDesktop />}
          {phoneOrTablet && <HeaderMobile />}
        </div>
        <div className="colContainer">
          <Switch>
            <Route path="/works">
              {desktop && <HomeDesktop />}
            </Route>
            <Route path="/cv">
              {desktop && <CV />}
              {phoneOrTablet && <HomeMobile />}
            </Route>
            <Route path="/contact">
              {desktop && <Contact />}
              {phoneOrTablet && <HomeMobile />}
            </Route>
            <Route path="/about">{phoneOrTablet && <About />}</Route>
            <Route path="/texts">
              {desktop && <Texts />} {phoneOrTablet && <Redirect to="/" />}
            </Route>
            <Route path="/">
              {phoneOrTablet && <HomeMobile />}
              {desktop && <HomeDesktop />}
            </Route>
          </Switch>
        </div>
        {phoneOrTablet && <Footer />}
      </Router>
    </div>
  );
}

export default App;
