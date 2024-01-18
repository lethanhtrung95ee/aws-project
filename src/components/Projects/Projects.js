import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import JavaReactApplication from "../../Assets/Projects/JavaReactApplication.png";
import aluminium from "../../Assets/Projects/aluminium.png";
import flutter from "../../Assets/Projects/flutter.png";
import mortgage from "../../Assets/Projects/mortgage.png";
import dart from "../../Assets/Projects/dart.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={flutter}
              isBlog={false}
              title="Ecommerce application"
              description="The fullter application using riverpod and firebase to build up the ecommerce application. Can browse the product and show the profile."
              ghLink="https://github.com/lethanhtrung95ee/flutter-firebase"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dart}
              isBlog={false}
              title="Dart Todo List "
              description="The todo list CLI coding by Dart to add and remind the list of tass is needed to do"
              ghLink="https://github.com/lethanhtrung95ee/dart-interview"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aluminium}
              isBlog={false}
              title="Aluminium"
              description="The web application builds up for Alluminiums can contact and sharing the available job position"
              ghLink="https://github.com/lethanhtrung95ee/Aluminum-application"       
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={JavaReactApplication}
              isBlog={false}
              title="Java-React Application"
              description="Ecommerce application has multiple roles to manipulate the products as sell and buy as the customer."
              ghLink="https://github.com/lethanhtrung95ee/asd-project"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mortgage}
              isBlog={false}
              title="Mortgage"
              description="Building up the project for mortgage can book the appointment to visit the house"
              ghLink="https://github.com/lethanhtrung95ee/MWA_Project_Service"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
