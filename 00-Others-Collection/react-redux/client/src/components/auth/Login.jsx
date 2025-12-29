import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/actions/authActions";
import { Navigate, Link } from "react-router-dom";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { isAuthenticated, error, loading } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();
  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch(login(formData));
  };

  // Optionally, use useEffect if you need side effects
  // useEffect(() => {
  // If user is already authenticated, redirect
  if (isAuthenticated) {
    return <Navigate to="/admin" />;
  }
  // }, [isAuthenticated]);

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <div className="bg-light p-5 rounded shadow">
            <h1 className="text-center mb-4">Login</h1>

            {/* Display error messages if there are any */}
            {error && Array.isArray(error)
              ? error.map((err, index) => (
                  <Alert key={index} variant="danger">
                    {err.msg}
                  </Alert>
                ))
              : error && <Alert variant="danger">{error}</Alert>}

            <Form onSubmit={onSubmit}>
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
              <Button
                variant="primary"
                type="submit"
                className="mt-3"
                block
                disabled={loading}
              >
                {loading ? "Loading..." : "Login"}
              </Button>
            </Form>
            <div className="text-center mt-3">
              <p>
                Don't have an account? <Link to="/register">Register</Link>
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
