import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import studyhub from "../../Assets/Projects/study hub.jpg";
import contactbook from "../../Assets/Projects/contact book.jpeg";
import Dashboard from "../../Assets/Projects/Dashboard.png";
import Data from "../../Assets/Projects/Data.png";
import weatherapp from "../../Assets/Projects/weather app.jpeg";

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
              imgPath={studyhub}
              isBlog={false}
              title="STUDY HUB"
              description="Certainly! Creating a study hub using the MERN stack (MongoDB, Express.js, React, Node.js) can be a great project. Here's an outline of the components you might want to include in your study hub"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={contactbook}
              isBlog={false}
              title="contact book"
              description="Creating a contact book (or address book) using Flask involves building a web application that allows users to manage and organize their contacts. Below is an outline of how you can structure and implement a basic contact book using Flask."
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weatherapp}
              isBlog={false}
              title="weather app"
              description="Certainly! Developing a weather web application involves integrating with a weather API to retrieve and display current weather conditions, forecasts, and related information. Below is an outline of key components and features you might include in a weather web application."
              demoLink="#"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Data}
              isBlog={false}
              title="Data Visualization"
              description="Data Visualization is a powerful and insightful process that transforms raw data from databases into visually compelling representations. Through a variety of visualization techniques, complex datasets are presented in a way that is easy to understand, facilitating analysis, decision-making, and the identification of patterns or trends"
              ghLink="https://github.com/prasanna-chintamaneni/KIET-RCTS-TASK1"
              demoLink="https://prasanna-kiet-rcts-task-1.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Dashboard}
              isBlog={false}
              title="Responsive Dashboard"
              description="This Responsive Dashboard is a web application built using React. It includes components like Navbar, Sidebar, Cards, PieCharts, Table, Form, and Footer. This project aims to provide a responsive and user-friendly interface for various functionalities"
              ghLink="https://github.com/prasanna-chintamaneni/KIET-RCTS-NOV-TASK"
              demoLink="https://nagaprasanna-kiet-rcts-nov-task.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Projects;
