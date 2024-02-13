import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/siteLogo.svg";
import navIconLinkedIn from "../assets/img/nav-linkedin.svg";
import { EnvelopeFill } from "react-bootstrap-icons";
import navIconGitHub from "../assets/img/nav-github.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
            <div id="bottomLogo" style={{ width: "32%", height: "32%" }}>
                <img src={logo} alt="Logo" />
            </div>
          
            <Col className="text-center text-sm-end">
                
            <div className="social-icon social-icon-footer">
              <a href="https://www.linkedin.com/in/kevin-bopp-34a471292" target="_blank" rel="noopener noreferrer">
                <img src={navIconLinkedIn} alt="LinkedIn Button" id="navImg1"/>
              </a>
              <a href="mailto:kevincbopp@gmail.com" target="_blank" rel="noopener noreferrer" className="hover-email-wrapper">
                <EnvelopeFill className="hover-email" />
              </a>
              <a href="https://github.com/kevinbopp" target="_blank" rel="noopener noreferrer">
                <img src={navIconGitHub} alt="GitHub Button" id="navImg3" />
              </a>
            </div>
            <p><br></br>Copyright © 2024 Kevin Bopp.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
