import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Landing from "./pages/landing/Landing";
import Blog from "./pages/blog/Blog";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route path="/blog">
          <Blog />
        </Route>

        <Route path="/">
          <Landing />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
