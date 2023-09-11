import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { HelmetProvider } from "react-helmet-async";
import resume from "..//../assets/documents/resume2.pdf";
import resumeImage from "..//../assets/images/resume.png";
import "./style.css";

function Resume() {
  return (
    <HelmetProvider>
      <Container>
        <Row>
          <Col lg="8">
            <h1 className="display-4 mb-4">Resume</h1>
            <hr className="t_border my-4 ml-0 text-left" />
            <img src={resumeImage} alt="resume" className="img-fluid"></img>
            <hr className="t_border my-2 ml-0 text-left" />
            <a href={resume} download={resume} className="resume-download-link">
              <h6 className="display-12 mb-4" style={{ marginRight: "10px" }}>
                Download Resume
              </h6>
              <FontAwesomeIcon icon={faDownload} className="responsive-icon" />
            </a>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
}

export default Resume;
