import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";
import { Container, Row, Col } from "reactstrap";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-content">
        <Header title="Dashboard" />
        <Container>
          <Row>
            <Col md="12">
              <h2>Welcome to Sweet Stay Residency</h2>
              <p>
                This is the dashboard page. You can add more content and
                features here as needed.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Dashboard;

