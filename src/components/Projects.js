import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import colorSharp2 from "../assets/img/color-sharp2.png";

import web1_cover from "../assets/img/web1_cover.png";
import web1_1 from "../assets/img/web1_1.png";
//import web1_2 from "../assets/img/web1_2.png";

import web2_cover from "../assets/img/web2_cover.png";
import web3_cover from "../assets/img/web3_cover.png";
import web4_cover from "../assets/img/web4_cover.png";
import web5_cover from "../assets/img/web5_cover.png";

import game1_cover from "../assets/img/game1_cover.png";
import game2_cover from "../assets/img/game2_cover.png";
import game3_cover from "../assets/img/game3_cover.png";

import app1_cover from "../assets/img/app1_cover.png";

import other1_cover from "../assets/img/other1_cover.png";
import other2_cover from "../assets/img/other2_cover.png";


// PROJECTS //
// Web Project 1

let web1_git = "https://github.com/kevinbopp/ChessGameApp";
let web1_yt = "http://www.google.com";
let web1_dl = "http://www.google.com";

// Web Project 2

let web2_git = "https://github.com/kevinbopp/ContactManager";
let web2_dl = "https://www.kevincbopp.com/ContactManager/index.html";

// Web Project 3

let web3_git = "https://github.com/kevinbopp/kevinbopp.github.io";
let web3_dl = "https://www.kevincbopp.com";

// Web Project 4

let web4_git = "https://github.com/kevinbopp/VTKDressageSite";
let web4_dl = "https://www.kevincbopp.com/VTKDressageSite/";

// Web Project 5

let web5_git = "https://github.com/kevinbopp/BingoBoard";
let web5_dl = "https://www.kevincbopp.com/BingoBoard/";

// Game Project 1 - Explore

//let game1_git = "";
//let game1_yt = "";
//let game1_dl = "";

// Game Project 2 - Camp Croatoan

//let game2_git = "";
//let game2_yt = "";
let game2_dl = "https://drive.google.com/file/d/1Opo61_nRXUu-5peBiO5x7_GIJ8ZYTi5x/view?usp=sharing";

// Game Project 3 - Paintball!

// let game3_git = "";
let game3_git = "https://github.com/kevinbopp/Paintball";
let game3_yt = "https://www.youtube.com/watch?v=H0y8kuSOHSs";
let game3_dl = "https://drive.google.com/file/d/1gxIG5pHwe1gFivzdAp1LtBYRyC20-Q17/view?usp=sharing";

// App Project 1 - Explore (Again)


// Other Project 1 - Unity Character System

// let other1_git = "";
let other1_yt = "https://www.youtube.com/watch?v=uLqv67DGA3o";
// add dl soon

// Other Project 2 - TI Bot

let other2_git = "https://github.com/kevinbopp/TIBotMazeCompetition";
let other2_yt = "https://www.youtube.com/watch?v=JOH9d7qumPI";
// no dl



export const Projects = () => {

  const webProjects = [
    {
      title: "Tactic Chess",
      category: "Full Stack React Website",
      desc: "Full stack web application",
      longDesc: "Responsive website to play chess!",
      coverImg: web1_cover,
      skillsList: ["Jira", "Figma", "Git", "React", "HTML", "CSS", "TypeScript", "Node.js"],
      imagesList: [web1_1, web1_cover],
      gitLink: web1_git,
    },
    {
      title: "Contact Manager",
      category: "Small Website",
      desc: "Small website to view contacts",
      longDesc: "Small and basic website with Create-Read-Update-Delete (CRUD) operations.",
      coverImg: web2_cover,
      skillsList: ["Git", "HTML", "CSS", "JavaScript"],
      imagesList: [web2_cover],
      gitLink: web2_git, dlLink: web2_dl,
    },
    {
      title: "Portfolio",
      category: "React Website",
      desc: "My personal CS portfolio",
      longDesc: "Responsive website.",
      coverImg: web3_cover,
      skillsList: ["React", "Git", "HTML", "CSS", "JavaScript", "Unit Testing"],
      imagesList: [web3_cover],
      gitLink: web3_git, dlLink: web3_dl,
    },
    {
      title: "VTK Dressage",
      category: "Website from Template",
      desc: "Small website from template",
      longDesc: "Filled in templates using HTML CSS etc",
      coverImg: web4_cover,
      skillsList: ["HTML", "CSS", "JavaScript"],
      imagesList: [web4_cover],
      gitLink: web4_git, dlLink: web4_dl,
    },
    {
      title: "Bingo Board",
      category: "Small Web Component",
      desc: "Small bingo board component",
      longDesc: "Long desc.",
      coverImg: web5_cover,
      skillsList: ["HTML", "CSS", "JavaScript"],
      imagesList: [web5_cover],
      gitLink: web5_git, dlLink: web5_dl,
    },
  ];

  const gameProjects = [
    {
      title: "Explore",
      category: "Flutter Mobile App",
      desc: "Educational mobile app & games",
      longDesc: "Mobile app with games and UI to teach math to children.",
      coverImg: game1_cover,
      skillsList: ["Jira", "Figma", "Git", "Flutter", "Dart", "JavaScript"],
      imagesList: [game1_cover],
    },
    {
      title: "Camp Croatoan",
      category: "3D Horror Game",
      desc: "Semester-long 3D horror game",
      longDesc: "This is a longer description.",
      coverImg: game2_cover,
      skillsList: ["Unity3D", "C#", "Trello", "QA Testing"],
      imagesList: [game2_cover, ],
      dlLink: game2_dl,
    },
    {
      title: "Paintball!",
      category: "2D Game, 1st Place",
      desc: "Multiplayer 2D arcade game",
      longDesc: "Developed for class competition arcade game.",
      coverImg: game3_cover,
      skillsList: ["VisualBasic", ".NET"],
      imagesList: [game3_cover, ],
      gitLink: game3_git, ytLink: game3_yt, dlLink: game3_dl,
    },
  ];

  const appProjects = [
    {
      title: "Explore",
      category: "Flutter Mobile App",
      desc: "Educational mobile app & games",
      longDesc: "Mobile app with games and UI to teach math to children.",
      coverImg: app1_cover,
      skillsList: ["Jira", "Figma", "Git", "Flutter", "Dart", "JavaScript"],
      imagesList: [app1_cover, ],
    },
  ];

  const otherProjects = [
    {
      title: "Character System",
      category: "Unity3D Project",
      desc: "Character creator and movement",
      longDesc: "Testing a.",
      coverImg: other1_cover,
      skillsList: ["Unity3D", "C#"],
      imagesList: [other1_cover, ],
      ytLink: other1_yt,
    },
    {
      title: "TI Bot Maze",
      category: "Robot Code, 1st Place",
      desc: "Robot code for competition",
      longDesc: "This is a longer description.",
      coverImg: other2_cover,
      skillsList: ["C"],
      imagesList: [other2_cover, ],
      gitLink: other2_git, ytLink: other2_yt,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={6}>
            <div>
                <h2>Projects</h2>

                <p>View examples of my previous and ongoing projects at a glance below, along with the skills I practiced with them. To read more about any, view code, or download samples, simply <span className="hilight">click on a card</span> to flip it.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item className="pillTitles">
                        <Nav.Link eventKey="first">Web</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="pillTitles">
                        <Nav.Link eventKey="second">Games</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="pillTitles">
                        <Nav.Link eventKey="third">Apps</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="pillTitles">
                        <Nav.Link eventKey="fourth">Other</Nav.Link>
                    </Nav.Item>
                    </Nav>

                    <Tab.Content>
                    <Tab.Pane eventKey="first">
                        <Row className="justify-content-center">
                        {
                            webProjects.map((project, index) => {
                            return (
                                <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                            })
                        }
                        </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                        <Row className="justify-content-center">
                        {
                            gameProjects.map((project, index) => {
                            return (
                                <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                            })
                        }
                        </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                        <Row className="justify-content-center">
                        {
                            appProjects.map((project, index) => {
                            return (
                                <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                            })
                        }
                        </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="fourth">
                        <Row className="justify-content-center">
                        {
                            otherProjects.map((project, index) => {
                            return (
                                <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                            })
                        }
                        </Row>
                    </Tab.Pane>
                    </Tab.Content>
                </Tab.Container>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
