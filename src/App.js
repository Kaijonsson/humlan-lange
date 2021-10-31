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

function App() {
  const desktop = useMediaQuery({ query: "(min-width: 769px)" });
  const phoneOrTablet = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <div id="App">
      <Router>
        {phoneOrTablet && <HeaderMobile />}
        {desktop && <HeaderDesktop />}

        <Switch>
          <Route path="/cv">
            {desktop && <CV />}
            {phoneOrTablet && <HomeMobile />}
          </Route>
          <Route path="/contact">
            {desktop && <Contact />}
            {phoneOrTablet && <HomeMobile />}
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            {desktop && <HomeDesktop />}
            {phoneOrTablet && <HomeMobile />}
          </Route>
        </Switch>
        {phoneOrTablet && <Footer />}
      </Router>
    </div>
  );
}

export default App;
