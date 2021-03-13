import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import { CartContextProvider } from "./contexts/cartContext";
import { UserContextProvider } from "./contexts/userContext";

import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Detail from "./pages/Detail";
import UseEffect from "./pages/UseEffect";
import Product from "./pages/Product";
import Cart from "./pages/Cart";

import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  return (
    <UserContextProvider>
      <CartContextProvider>
        <Router>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/about" component={About} />
              <Route exact path="/login" component={Login} />
              <PrivateRoute exact path="/" component={Home} />
              <PrivateRoute exact path="/product/:id" component={Detail} />
              <PrivateRoute exact path="/use-effect" component={UseEffect} />
              <PrivateRoute exact path="/products" component={Product} />
              <PrivateRoute exact path="/carts" component={Cart} />
            </Switch>
          </div>
        </Router>
      </CartContextProvider>
    </UserContextProvider>
  );
};

export default App;
