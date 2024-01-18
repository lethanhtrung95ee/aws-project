import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import "./styles.css";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Thanh Trung Le </span>
            from <span className="purple"> Ho Chi Minh, Viet Nam.</span>
            <br />
            I have been finding the job as a Java software developer.
            <br />
            I'm studying Master Science of Computer Science from Maharishi International University
            <br />
          </p>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Thanh Trung Le</footer>
          <div class="workExperience">
            <h2>
              Work experience
            </h2>
            <ul>
              <li>
                <div class="jobPosition">
                  <span class="purple">
                    Software Engineer
                  </span>
                  <span>
                    04/2020 – 12/2021
                  </span>
                </div>
                <div class="projectName bolded">
                  MOMO (M_SERVICE), Ho Chi Minh, Vietnam
                  <span>
                    Momo is an e-wallet and payments app that allows users to make payments and transfer money digitally.<br></br>
                    <span class="purple">
                      Responsibility:<br></br>
                    </span>

                    •	Actively involved in all software development cycle phases other than Deployment, including Design, Implementation, Testing and Maintenance of an existing application in compliance with corporate open source and security policies<br></br>
                    •	Take full ownership of assigned projects, ensuring each phase in the software development cycle is done in a timely manner and can provide estimates for project completion.<br></br>
                    •	Work in a team setting to achieve work goals/objectives in projects targeting new functionality as well as those focused-on refactoring.<br></br>
                    •	Availability, quick analysis and fixing in production phase.<br></br>
                    •	Spearheaded the integration between Momo application and multiple banks and development and maintenance of specialized microservices (Currency, Education, Achievement) for gaming applications.<br></br>
                    <span class="purple">
                      Achievement:<br></br>
                    </span>
                    •	Ensured delivery of project with high quality and coverage of unit test<br></br>
                    •	Proactively resolved all technical problems in a proper time by coordinating with teammates.<br></br>
                    <span class="purple">
                      Technologies Used:<br></br>
                    </span>Java 11, Microservices, Hibernate, Multi-Threading, Junit, Kotlin, Cassandra, GCP, Eclipse, Git, Kafka, Kubernetes, Junit, Jenkins, Redis, Firestore.<br></br>
                  </span>
                </div>
              </li>
              <br></br>
              <br></br>
              <br></br>
              <li>
                <div class="jobPosition">
                  <span class="purple">
                    Java Developer
                  </span>
                  <span>
                    07/2018-04/2020
                  </span>
                </div>
                <div class="projectName bolded">
                  UNIT Technology Corporation, Ho Chi Minh, Vietnam
                  <span>
                    UNIT Technology provides software development, outsourcing, and webinar services.<br></br>
                    <span class="purple">
                      Responsibility:<br></br>
                    </span>

                    •	Building up the web service full stack and engage in fully development life cycles.<br></br>
                    •	Discussed and advised features for customers and managed time for the assigned in each spring.<br></br>
                    •	Orchestrated the development and integration of full-stack applications, catering to both external customer-facing functionalities and internal bank operations.<br></br>
                    •	Led discussions with stakeholders, advising on application requirements, and formulated comprehensive plans for technology implementation.<br></br>
                    •	Collaborated with internal teams to manage and implement updates, features, and integrations within the OPT, OCD, and e-signature projects.<br></br>

                    <span class="purple">
                      Achievement:<br></br>
                    </span>
                    •	Successfully implemented OTP verification for customer identity validation, enhancing security and user authentication.<br></br>
                    •	Streamlined the integration of data from different sources into forms, optimizing the process and improving data accuracy.<br></br>
                    •	Engineered a solution for handling and resizing signature images, reducing their size without compromising quality, thus resolving data size issues for internal bank transfers.<br></br>
                    •	Conducted thorough research to optimize image handling, exploring various technologies and approaches to ensure efficient data processing.<br></br>

                    <span class="purple">
                      Technologies Used:<br></br>
                    </span>Java 11, Hibernate, Spring Boot, Spring MVC, HTML5, CSS3, Angular, Angular Material, Thymeleaf, JavaScript, Git, Oracle SQL Server, REST, SOAP, Tomcat, RabbitMQ, Maven, Jenkins, Keycloak
                    Java developer • 04/2017-07/2018

                  </span>
                </div>
              </li>
              <br></br>
              <br></br>
              <br></br>
              <li>
                <div class="jobPosition">
                  <span class="purple">
                    Java developer
                  </span>
                  <span>
                    04/2017-07/2018
                  </span>
                </div>
                <div class="projectName bolded">
                  ROBERT BOSCH, Ho Chi Minh, Vietnam
                  <span>
                    German multinational engineering and technology company<br></br>
                    <span class="purple">
                      Responsibility:<br></br>
                    </span>
                    •	Analyzed errors stemming from EPS, cameras, and radar systems, conducting detailed assessments to identify issues impacting vehicle functionality.<br></br>
                    •	Collaborated with the screen team, reporting detected errors promptly to facilitate user alerts and ensure immediate attention to potential safety concerns.<br></br>
                    •	Managed the storage of warning messages in the car's black box and radar memory, establishing a reliable repository for crucial system notifications and data.<br></br>
                    •	Took charge of identifying and evaluating radar-related issues such as blind spots and misalignments, conducting thorough assessments to maintain radar functionality and optimize its features for improved performance.<br></br>
                    <span class="purple">
                      Achievement:<br></br>
                    </span>
                    •	Implemented a systematic approach to error analysis, enhancing the detection and reporting process for issues originating from EPS, cameras, and radar systems, thus contributing to proactive issue resolution.<br></br>
                    •	Successfully established a robust storage system for warning messages within the car's black box and radar memory, ensuring comprehensive data capture and accessibility for diagnostics and future analysis.<br></br>
                    •	Played a pivotal role in identifying radar issues like blind spots and misalignments, enabling precise assessments and remedial actions to enhance radar functionality and mitigate potential safety risks for vehicles.<br></br>
                    <span class="purple">
                      Technologies Used:<br></br>
                    </span>
                    Git, Java, Jira, C
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
