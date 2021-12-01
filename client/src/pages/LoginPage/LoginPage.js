import React, { useState } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import "./LoginPage.css";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  console.log(username, password);
  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const onClickLogin = () => {
    alert('Login');
  }
  console.log(username, password);
  return (
    <div className="login-page">
      <Card>
        <Card.Body>
          <Card.Title>Login</Card.Title>
          <Row style={{ marginBottom: 15 }}>
            <input
              autocomplete="none"
              onChange={onChangeUsername}
              type="text"
            />
          </Row>
          <span>{username}</span>
          <Row>
            <input onChange={onChangePassword} type="password" />
          </Row>
          <Button onClick={onClickLogin} variant="primary">Log In</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default LoginPage;
