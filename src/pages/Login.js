import { useContext, useState } from "react";
import { UserContext } from "../contexts/userContext";
import { Modal, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Login = () => {
  const router = useHistory();
  const [state, dispatch] = useContext(UserContext);
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const LoginUser = () => {
    dispatch({
      type: "LOGIN_SUCCESS",
    });
    handleClose();
    router.push("/");
  };

  const handleClose = () => {
    setShow(false);
  };

  const handleClose2 = () => {
    setShow(false);
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 flex-column">
      <h1>{state.isLogin ? "ANDA LOGIN" : "TIDAK LOGIN"}</h1>
      <button
        className="btn btn-primary btn-block"
        onClick={() => setShow(true)}
      >
        LOGIN
      </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Woohoo, you're reading this text in a modal!
          <h1
            onClick={() => {
              handleClose();
              setShow2(true);
            }}
          >
            go to register
          </h1>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={LoginUser}>
            LOGIN
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Woohoo, you're reading this text in a modal!
          <h1
            onClick={() => {
              handleClose2();
              setShow(true);
            }}
          >
            go to login
          </h1>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose2}>
            Close
          </Button>
          <Button variant="primary" onClick={LoginUser}>
            REGISTER
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Login;
