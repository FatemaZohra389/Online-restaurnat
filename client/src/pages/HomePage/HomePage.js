import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="login-page">
      <Card>
        <Card.Body>
          <Card.Title>Login</Card.Title>
          <Row style={{ marginBottom: 15 }}>
            <input type="password" />
          </Row>
          <Row>
            <input type="text" />
          </Row>
          <Button variant="primary">Home</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default HomePage;
