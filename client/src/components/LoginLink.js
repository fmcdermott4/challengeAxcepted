import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Nav, Modal, Tab, Button } from "react-bootstrap";
import SignUpForm from "../components/SignupForm";
import LoginForm from "../components/LoginForm";

const LoginLink = () => {
  const [showModal, setShowModal] =
    // true;
    useState(false);

  return (
    <div>
      {/* <h1>LOGIN</h1> */}
      <Button variant="primary" onClick={() => setShowModal(true)}>
        Login/Sign Up
      </Button>
      <Modal
        size="lg"
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby="signup-modal"
      >
        {/* tab container to do either signup or login component */}
        <Tab.Container defaultActiveKey="login">
          <Modal.Header closeButton>
            <Modal.Title id="signup-modal">
              <Nav variant="pills">
                <Nav.Item>
                  <Nav.Link eventKey="login">Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="signup">Sign Up</Nav.Link>
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tab.Content>
              <Tab.Pane eventKey="login">
                <LoginForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
              <Tab.Pane eventKey="signup">
                <SignUpForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
    </div>
  );

  // return(
  //     <h1>Hello login</h1>
  // )
};

export default LoginLink;