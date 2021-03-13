import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Detail from "./pages/Detail";
import UseEffect from "./pages/UseEffect";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/product/:id" component={Detail} />
          <Route exact path="/use-effect" component={UseEffect} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
