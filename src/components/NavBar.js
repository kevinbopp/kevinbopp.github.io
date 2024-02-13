import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { EnvelopeFill } from "react-bootstrap-icons";

// File imports.
import logo from "../assets/img/siteLogo.svg";
import navIconLinkedIn from "../assets/img/nav-linkedin.svg";
import navIconIndeed from "../assets/img/nav-indeed.svg";
import navIconGitHub from "../assets/img/nav-github.svg";

// Where we did img src below, it was originally >Logo< as it was just a text title.

export const NavBar = () => {
    // Set the default link being active to home on page load.
    const [activeLink, setActiveLink] = useState("home");
    // Triggered once scroll starts.
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            }
            else
            {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    const openResumeInNewTab = () => {
        const resumeUrl = process.env.PUBLIC_URL + '/Resume.pdf';
        window.open(resumeUrl, '_blank');
    };

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <div style={{ width: "100%", height: "100%" }}>
                        <img src={logo} alt="Logo" />
                    </div>
                    
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link
                            href="#home"
                            className={activeLink === "home" ? "active navbar-link" : "navbar-link"}
                            onClick={() => onUpdateActiveLink("home")}>Home</Nav.Link>
                        <Nav.Link
                            href="#skills"
                            className={activeLink === "skills" ? "active navbar-link" : "navbar-link"}
                            onClick={() => onUpdateActiveLink("skills")}>Skills</Nav.Link>
                        <Nav.Link
                            href="#projects"
                            className={activeLink === "projects" ? "active navbar-link" : "navbar-link"}
                            onClick={() => onUpdateActiveLink("projects")}>Projects</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
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
                        <button className="vvd" onClick={() => openResumeInNewTab()}>
                            <span>My Resume</span>
                        </button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}