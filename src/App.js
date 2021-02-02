import "./App.css";
import React from "react";
import Services from "./Services";
import Covid from "./Covid";
import Contact from "./Contact";
import {
  Router as BrowserRouter,
  HashRouter,
  Switch,
  Route
} from "react-router-dom";
import Footer from "./layout/Footer";

function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Services />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/covid">
            <Covid />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
        <Footer />
        {console.log("loaded page")}
      </div>
    </HashRouter>
  );
}

export default App;
