import { useState, useEffect } from "react";

import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle, Download } from "react-bootstrap-icons";
import headerImg from "../assets/img/header.png";

export const Banner = ({ scrollToProjects }) => {

  // Used for indexing current word.
  const [loopNum, setLoopNum] = useState(0);
  // Tracking state of word cycler.
  const [isDeleting, setIsDeleting] = useState(false);
  // List of words to cycle in the typing animation.
  const toCycle = ["Web Developer", "Game Developer", "Software Engineer"];
  // What will be typed next? We start with nothing.
  const [text, setText] = useState("");
  // Use period to determine amount of time a word is shown once typed.
  const period = 1000;
  // Used to determine the amount of time between typing letters below.
  const deltaValue = 75;
  // Use delta to control how fast each letter is typed.
  const [delta, setDelta] = useState(deltaValue);


  // Responsible for typing and deleting.
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta)

    return () => { clearInterval(ticker)};
  }, [text])

  const tick = () => {
    // Tick between the word indeces or back to 0.
    let i = loopNum % toCycle.length;
    let fullText = toCycle[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2)
    }

    if (!isDeleting && updatedText === fullText)
    {
      setIsDeleting(true);
      setDelta(period);
    }
    else if (isDeleting && updatedText === "")
    {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
    else if (!isDeleting && !(updatedText === fullText))
    {
      setDelta(deltaValue);
    }
  }

  const openResumeInNewTab = () => {
    const resumeUrl = process.env.PUBLIC_URL + '/Resume.pdf';
    window.open(resumeUrl, '_blank');
  };

  // PSST. See the button onClick? There's a Download icon that looks amazing for the Resume option...
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">

          <Col xs={12} md={6} xl={7}>
            
            <h1 className="nameText">{"Kevin Bopp"}</h1>
            <h2 className="nameText moveUp"><span>{text + "|"}</span></h2>
            <span className="tagline">B.S. Computer Science (anticipated 2024)</span>
            <p>I am a senior undergraduate student at the University of Central Florida with a
              passion for all things software. I am on track to earn my Bachelor's of Science in
              Computer Science later this year!<br></br><br></br>Actively seeking an internship related
              to my interests in front-end web and game development, mobile applications, virtual reality, and software.</p>
            <button className="hover-underline" onClick={scrollToProjects}>Check out my projects <ArrowRightCircle size={25}/> </button>
            <button className="hover-underline" onClick={() => openResumeInNewTab()}>Download my resume <Download size={25}/> </button>
          </Col>

          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header Image" />
          </Col>

        </Row>
      </Container>
    </section>
  )
}
