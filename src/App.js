import { useState } from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

// CSS
// inline styling
// Memindahkan inline styling ke sebuah variable

const App = () => {
  const [isRed, setIsRed] = useState(true);

  const changeBackround = () => {
    setIsRed((prev) => {
      return !prev;
    });
  };

  return (
    <div className={`app-cont ${isRed ? "bg-primary" : "bg-secondary"}`}>
      <header className="app-header"></header>
      <div style={styles.contentCont}>
        <button onClick={changeBackround}>Change Backround</button>
        <pre className="text-white text-medium">
          {JSON.stringify(isRed, 2, null)}
        </pre>
      </div>
    </div>
  );
};

const styles = {
  contentCont: {
    display: "flex",
    minHeight: "80vh",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "column",
    margin: "30px 20px 50px",
  },
};

export default App;
