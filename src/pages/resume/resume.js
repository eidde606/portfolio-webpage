import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Container, Row } from "react-bootstrap";
import { HelmetProvider } from "react-helmet-async";
import resumePDF from "../../assets/documents/SoftwareEngineer1.pdf";
import updateResume from "../../assets/images/updateResume.png";

import "./style.css";

function Resume() {
  return (
    <HelmetProvider>
      <Container>
        <Row>
          <Col lg="8">
            <h1 className="display-4 mb-4">Resume</h1>
            <hr className="t_border my-4 ml-0 text-left" />
            <img src={updateResume} alt="resume" className="img-fluid" />
            <hr className="t_border my-2 ml-0 text-left" />
            <a href={resumePDF} download className="resume-download-link">
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
