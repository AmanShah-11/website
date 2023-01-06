import React from "react";
// import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages";
import SignInPage from "./pages/signin";
import "semantic-ui-css/semantic.min.css";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path={"/"} element={<Home />}/>
          <Route path={"/resume"} element={<SignInPage />}/>
        </Routes>
    </Router>
  );
}

export default App;
