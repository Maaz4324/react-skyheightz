import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Gallery from "./pages/Gallery";
import Footer from './pages/Home/Footer'
import Teacher from "./pages/Teacher";
import Contact from "./pages/Contact";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Helmet>
          <title>
            SkyHeightz-Home
          </title>
          <meta name="description" content="SkyHeightz coaching classes in howrah"></meta>
          <meta name="keywords" content="skyheightz, skyheight, coaching, tuition, howrah"></meta>
        </Helmet>
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/gallery">
            <Gallery/>
          </Route>
          <Route exact path="/teacher">
            <Teacher/>
          </Route>
          <Route exact path="/contact">
            <Contact/>
          </Route>
          <Route exact path='*'>
          <Home />
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
