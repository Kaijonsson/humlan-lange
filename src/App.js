import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { useMediaQuery } from "react-responsive";

import HomeDesktop from "./views/home/HomeDesktop";
import HomeMobile from "./views/home/HomeMobile";
import Works from "./views/works/Works";
import CV from "./views/cv/CV";
import Contact from "./views/contact/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./views/about/About";

function App() {
  const desktop = useMediaQuery({ query: "(min-width: 769px)" });
  const phoneOrTablet = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <div id="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/works">
            <Works />
          </Route>
          <Route path="/cv">
            <CV />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            {desktop && <HomeDesktop />}
            {phoneOrTablet && <HomeMobile />}
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
