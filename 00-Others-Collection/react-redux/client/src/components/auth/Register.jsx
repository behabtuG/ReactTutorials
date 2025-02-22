import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../store/actions/authActions";
import { Navigate, Link } from "react-router-dom";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { name, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      console.error("Passwords do not match");
    } else {
      dispatch(register(formData));
    }
  };

  // Redirect if logged in
  if (isAuthenticated) {
    return <Navigate to="/admin" />;
  }

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <div className="bg-light p-5 rounded shadow">
            <h1 className="text-center mb-4">Register</h1>
            <Form onSubmit={onSubmit}>
              <Form.Group controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Name"
                  name="name"
                  value={name}
                  onChange={onChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={email}
                  onChange={onChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={onChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formBasicPasswordConfirm">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  name="password2"
                  value={password2}
                  onChange={onChange}
                  required
                />
              </Form.Group>
              <Button variant="primary" type="submit" className="mt-3" block>
                Register
              </Button>
              <div className="text-center mt-3">
                <p>
                  Already have an account? <Link to="/">Login</Link>
                </p>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
