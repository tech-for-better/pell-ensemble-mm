import React from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CodeBlock from "./pages/learnByMovement/codeBlock";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import LearnLoop from "./pages/learnByMovement/learnLoop";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/codeBlock">
          <CodeBlock />
        </Route>
        <Route path="/LearnLoop">
          <LearnLoop />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
