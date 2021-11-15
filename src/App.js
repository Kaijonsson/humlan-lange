import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { useMediaQuery } from "react-responsive";

import HomeDesktop from "./views/home/HomeDesktop";
import HomeMobile from "./views/home/HomeMobile";
import CV from "./views/cv/CV";
import Contact from "./views/contact/Contact";
import Footer from "./components/Footer";
import About from "./views/about/About";
import HeaderMobile from "./components/HeaderMobile";
import HeaderDesktop from "./components/HeaderDesktop";
import Texts from "./views/texts/Texts";

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
            <Route path="/texts">{desktop && <Texts />}</Route>
            <Route path="/">
              {desktop && <HomeDesktop />}
              {phoneOrTablet && <HomeMobile />}
            </Route>
          </Switch>
        </div>
        {phoneOrTablet && <Footer />}
      </Router>
    </div>
  );
}

export default App;
