import { useState } from "react";
import { Col, Button } from "react-bootstrap";
import ReactCardFlip from 'react-card-flip';
import { ArrowLeftRight, Github, Youtube, Download } from "react-bootstrap-icons";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const ProjectCard = ({
  title, category, desc, longDesc, coverImg,
  skillsList = [], imagesList = [],
  gitLink = "", ytLink = "", dlLink = ""}) => {

  // Page begins loaded with card unflipped.
  const [isFlipped, setIsFlipped] = useState(false);

  // Function to flip a card.
  function flipCard()
  {
    setIsFlipped(!isFlipped);
  }

  const responsive = {
    all: {
        breakpoint: { max: 4000, min: 0 },
        items: 1
    }
  };

  // First div within ReactCardFlip is the front, second is the back.
  return (
    <Col size={12} sm={8} md={4} className="project-card">

      <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
        <div className="proj-imgbx" onClick={flipCard}>
          <img src={coverImg} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <div>
              <span className="italicize">{desc}</span>
            </div>
            <br></br>
            <div className="skill-list-container">
              {skillsList.map((skill, index) => (
                <span key={index} className="skill-list-box">
                  {skill}
                </span>
              ))}
            </div>
            <h3 className="click-to-flip">&nbsp;</h3>
            <ArrowLeftRight className="flip-icon-front" />
          </div>
        </div>

        <div className="project-card-back">
          <h2 id = "title_text">{title}</h2>
          <h5 id = "category_text">{category}</h5>
          <ArrowLeftRight className="flip-icon-back" onClick={flipCard} />
          
          <Carousel 
            responsive={responsive} 
            infinite={false} 
            showDots={false}
            draggable={false}
            containerClass="carousel-container"
          >
            {imagesList.map((image, index) => (
              <div key={index} className="carousel-image-wrapper">
                <div className="image-container">
                  <img src={image} alt={`Image ${index + 1}`} className="carousel-image" />
                </div>
              </div>
            ))}
          </Carousel>

          <div className="long-description">
            <span>{longDesc}</span>
          </div>
          
          <div className="button-container">
            {gitLink !== "" && 
              <a href = {gitLink} target="_blank"><button className="hover-github btninvis"> <Github size={30}></Github> </button> </a>
            }
            {ytLink !== "" &&
              <a href = {ytLink} target="_blank"><button className="hover-youtube btninvis"> <Youtube size={30}></Youtube> </button> </a>
            }
            {dlLink !== "" &&
              <a href = {dlLink} target="_blank"><button className="hover-download btninvis"> <Download size={30}></Download> </button> </a>
            }
          </div>
        </div>

      </ReactCardFlip>
    </Col>
  )
}
