import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Login />
    </div>
  );
};

export default App;
