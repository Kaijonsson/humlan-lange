import "./App.css";

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

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

function App() {
  const desktop = useMediaQuery({ query: "(min-width: 1001px)" });
  const phoneOrTablet = useMediaQuery({ query: "(max-width: 1000px)" });

  return (
    <div id="App">
      <Router>
        <div>
          {phoneOrTablet && <HeaderMobile />}
          {desktop && <HeaderDesktop />}
        </div>
        <div className="colContainer">
          <Switch>
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
              {desktop && <HomeDesktop />}
              {phoneOrTablet && <HomeMobile />}
            </Route>
          </Switch>
          <div id="copyDiv">
            <p>
              Copyright{" "}
              <span>
                <FontAwesomeIcon icon={faCopyright} />
              </span>{" "}
              2007 Humlan Lange
            </p>
            <p>
              Website created by <span>Axel Jönsson</span>
            </p>
          </div>
        </div>
        {phoneOrTablet && <Footer />}
      </Router>
    </div>
  );
}

export default App;
