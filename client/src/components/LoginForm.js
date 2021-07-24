// see SignupForm.js for comments
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";

import { Form, Button, Alert } from "react-bootstrap";
// import {QUERY_USERS} from "../utils/queries"
import { LOGIN_USER } from "../utils/mutations";

// import { loginUser } from "../utils/API";
// '..//API';
import Auth from "../utils/auth";

const LoginForm = (props) => {
  const [userFormData, setUserFormData] = useState({ email: "", password: "" });
  // const [validated] = useState(false);
  // const [showAlert, setShowAlert] = useState(false);

  const [loginUser, { error, data }] = useMutation(LOGIN_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserFormData({
      ...userFormData,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(userFormData);

    // check if form has everything (as per react-bootstrap docs)
    // const form = event.currentTarget;
    // if (form.checkValidity() === false) {
    //   event.preventDefault();
    //   event.stopPropagation();
    // }

    try {
      const { data } = await loginUser({
        variables: { ...userFormData },
      });
      console.log(userFormData);
      console.log(data);
      Auth.login(data.login.token, userFormData.email);

      // window.location.reload()
    } catch (err) {
      console.error(err);
    }

    setUserFormData({
      email: "",
      password: "",
    });

    // try {
    //   const response = await loginUser(userFormData);

    //   if (!response.ok) {
    //     throw new Error("something went wrong!");
    //   }

    //   const { token, user } = await response.json();
    //   console.log(user);
    //   // Auth.login(token);
    // } catch (err) {
    //   console.error(err);
    //   // setShowAlert(true);
    // }

    // setUserFormData({
    //   username: "",
    //   email: "",
    //   password: "",
    // });
  };

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   // setUserFormData({ ...userFormData, [name]: value });
  //   if (name == "email") {
  //     setUserFormData({ ...userFormData, [name]: value });
  //   } else if (name == "password") {
  //     setUserFormData({ ...userFormData, [name]: value });
  //   }
  // };

  return (
    <>
      <Form
        // noValidate validated={validated}
        onSubmit={handleFormSubmit}
      >
        {/* <Alert
          dismissible
          onClose={() => setShowAlert(false)}
          show={showAlert}
          variant="danger"
        >
          Something went wrong with your login credentials!
        </Alert> */}
        <Form.Group>
          <Form.Label htmlFor="email">Email</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your email"
            name="email"
            onChange={handleChange}
            value={userFormData.email}
          />
          <Form.Control.Feedback type="invalid">
            Email is required!
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Your password"
            name="password"
            onChange={handleChange}
            value={userFormData.password}
          />
          <Form.Control.Feedback type="invalid">
            Password is required!
          </Form.Control.Feedback>
        </Form.Group>
        <Button
          disabled={!(userFormData.email && userFormData.password)}
          type="submit"
          variant="success"
        >
          Submit
        </Button>
      </Form>
    </>
  );
};

export default LoginForm;
