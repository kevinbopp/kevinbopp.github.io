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
import game4_cover from "../assets/img/game3_cover.png";
import game5_cover from "../assets/img/game3_cover.png";
import game6_cover from "../assets/img/game3_cover.png";

import app1_cover from "../assets/img/app1_cover.png";
import app2_cover from "../assets/img/app1_cover.png";

import other1_cover from "../assets/img/other1_cover.png";
import other2_cover from "../assets/img/other2_cover.png";
import other3_cover from "../assets/img/other2_cover.png";
import other4_cover from "../assets/img/other2_cover.png";

// PROJECTS

// Web Project 1 - Tactic Chess

let web1_git = "https://github.com/kevinbopp/ChessGameApp";
let web1_yt = ""; // TODO Add Chess video??? With the plugin to type/show button effects?
let web1_dl = "https://www.figma.com/file/DXmQHnLw4feGMbJic9gAK9/Tactic-Chess?type=design&node-id=0-1&mode=design";

// Web Project 2 - Contact Manager

let web2_yt = "";
let web2_git = "https://github.com/Srignan/ContactManager";
let web2_dl = "https://www.kevincbopp.com/ContactManager/index.html";

// Web Project 3 - Portfolio Website

let web3_yt = "";
let web3_git = "https://github.com/kevinbopp/kevinbopp.github.io";
let web3_dl = "https://www.kevincbopp.com";

// Web Project 4 - VTK Dressage

let web4_yt = "";
let web4_git = "https://github.com/kevinbopp/VTKDressageSite";
let web4_dl = "https://www.kevincbopp.com/VTKDressageSite/";

// Web Project 5 - Bingo Board

let web5_yt = "";
let web5_git = "https://github.com/kevinbopp/BingoBoard";
let web5_dl = "https://www.kevincbopp.com/BingoBoard/";

// Game Project 1 - Explore

let game1_git = "https://github.com/jorgetrejo36/Explore";
let game1_yt = "https://www.figma.com/file/pu1Z6XrpKKLlwtds95DIhc/Growth%2B-v2-Figma?type=design&node-id=0-1&mode=design";
let game1_dl = "https://explorelearn.netlify.app/resources";

// Game Project 2 - Camp Croatoan

//let game2_git = "";
//let game2_yt = "";
let game2_dl = "https://drive.google.com/file/d/1Opo61_nRXUu-5peBiO5x7_GIJ8ZYTi5x/view?usp=sharing";

// Game Project 3 - Farmhand

let game3_git = "https://github.com/pmdevita/Farmhand";
let game3_yt = "";
let game3_dl = "https://drive.google.com/file/d/1HgH11dDfIHFFymzSOlf4ilG69YnNO8RC/view?usp=sharing";

// Game Project 4 - Paintball!

let game4_git = "https://github.com/kevinbopp/Paintball";
let game4_yt = "https://www.youtube.com/watch?v=H0y8kuSOHSs";
let game4_dl = "https://drive.google.com/file/d/1gxIG5pHwe1gFivzdAp1LtBYRyC20-Q17/view?usp=sharing";

// Game Project 5 - 2D Platformer

// Come back and make a video?
let game5_git = "https://github.com/kevinbopp/2DPlatformer";
let game5_yt = "";
let game5_dl = "https://drive.google.com/file/d/1XoWaS_d1jJbBHetWpxYe-ngrRv9cvWdv/view?usp=sharing";

// Game Project 6 - Simon Says

// Come back and make a video? First game ever made.
let game6_git = "https://github.com/kevinbopp/SimonSays";
let game6_yt = "";
let game6_dl = "https://drive.google.com/file/d/1ZPbMignEAOjvukKafiJBwzeZ_oiEwKGF/view?usp=sharing";

// App Project 1 - Explore (Again)
let app1_git = "https://github.com/jorgetrejo36/Explore";
let app1_yt = "https://www.figma.com/file/pu1Z6XrpKKLlwtds95DIhc/Growth%2B-v2-Figma?type=design&node-id=0-1&mode=design";
let app1_dl = "https://explorelearn.netlify.app/resources";

// App Project 2 - ConnectFour
let app2_git = "https://github.com/kevinbopp/ConnectFour";
let app2_yt = "";
let app2_dl = "";

// Other Project 1 - Unity Character System

// let other1_git = "";
let other1_yt = "https://www.youtube.com/watch?v=uLqv67DGA3o";
// add dl soon, code too?

// Other Project 2 - TI Bot

let other2_git = "https://github.com/kevinbopp/TIBotMazeCompetition";
let other2_yt = "https://www.youtube.com/watch?v=JOH9d7qumPI";
let other2_dl = "";

// Other Project 3 - Blender Models

// No YT unless compilation made in future of models.
// No git obviously, 3D models.
// Dl link links to ALL 3d models in drive folder.
let other3_git = "";
let other3_yt = "";
let other3_dl = ""; // Fill me in! Google Drive link

// Other Project 4 - Armonios Oasis TEA@UCF

// No git or YT or DL, just images.
let other4_git = "";
let other4_yt = "";
let other4_dl = "";



export const Projects = () => {

  const webProjects = [
    {
      title: "Tactic Chess",
      category: "Full Stack React Website",
      desc: "Full stack web application",
      longDesc: "Prototyped in Figma and implemented the front-end of a responsive web application for registered users to play chess.",
      coverImg: web1_cover,
      skillsList: ["Jira", "Figma", "Git", "React", "HTML", "CSS", "TypeScript", "Node.js"],
      imagesList: [web1_1, web1_cover],
      gitLink: web1_git,dlLink: web1_dl,
    },
    {
      title: "Contact Manager",
      category: "Small Website",
      desc: "Small website to view contacts",
      longDesc: "Developed the front-end of a basic site that performs Create-Read-Update-Delete (CRUD) operations to view contacts.",
      coverImg: web2_cover,
      skillsList: ["Git", "HTML", "CSS", "JavaScript"],
      imagesList: [web2_cover],
      gitLink: web2_git, dlLink: web2_dl,
    },
    {
      title: "Portfolio",
      category: "React Website",
      desc: "My personal CS portfolio",
      longDesc: "Designed a fully-responsive website from scratch to showcase myself professionally, as well as my skills and projects.",
      coverImg: web3_cover,
      skillsList: ["React", "Git", "HTML", "CSS", "JavaScript"],
      imagesList: [web3_cover],
      gitLink: web3_git, dlLink: web3_dl,
    },
    {
      title: "VTK Dressage",
      category: "Website from Template",
      desc: "Small website from template",
      longDesc: "Given a basic HTML template file, filled in the remaining requirements as per a fictional client's requests.",
      coverImg: web4_cover,
      skillsList: ["HTML", "CSS", "JavaScript"],
      imagesList: [web4_cover],
      gitLink: web4_git, dlLink: web4_dl,
    },
    {
      title: "Bingo Board",
      category: "Small Web Component",
      desc: "Small bingo board component",
      longDesc: "Implemented a small bingo board that generates random numbers using JavaScript in a web page.",
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
      longDesc: "Designed and coded the front-end UI and educational games of a cross-platform mobile app to teach basic math to children.",
      coverImg: game1_cover,
      skillsList: ["Jira", "Figma", "Git", "Flutter", "Dart", "JavaScript"],
      imagesList: [game1_cover],
      gitLink: game1_git, ytLink: game1_yt, dlLink: game1_dl,
    },
    {
      title: "Camp Croatoan",
      category: "Unity3D Horror Game",
      desc: "Semester-long 3D horror game",
      longDesc: "Led the development of a large videogame in a team of three. Handled various character systems and level design.",
      coverImg: game2_cover,
      skillsList: ["Unity3D", "C#", "Trello", "QA Testing"],
      imagesList: [game2_cover, ],
      dlLink: game2_dl,
    },
    {
      title: "Farmhand",
      category: "3D Godot Game",
      desc: "Fall 2022 Spooky Game Jam",
      longDesc: "COPY PASTE DESC, CHANGE SKILLS LIST, ensure skills here and descriptions on HANDSHAKE say GDScript not C#",
      coverImg: game3_cover,
      skillsList: ["Godot", "GDScript"],
      imagesList: [game3_cover, ],
      gitLink: game3_git, dlLink: game3_dl,
    },
    {
      title: "Paintball!",
      category: "2D Game, 1st Place",
      desc: "Multiplayer 2D arcade game",
      longDesc: "Created a small 2D, multiplayer shooting game between stick figures and custom animations for a high school competition.",
      coverImg: game4_cover,
      skillsList: ["VisualBasic", ".NET"],
      imagesList: [game4_cover, ],
      gitLink: game4_git, ytLink: game4_yt, dlLink: game4_dl,
    },
    {
      title: "2D Platformer",
      category: "Info coming soon",
      desc: "Info coming soon",
      longDesc: "Info coming soon",
      coverImg: game5_cover,
      skillsList: ["Coming soon"],
      imagesList: [game5_cover, ],
      gitLink: game5_git, dlLink: game5_dl,
    },
    {
      title: "Simon Says",
      category: "Info coming soon",
      desc: "Info coming soon",
      longDesc: "Info coming soon",
      coverImg: game6_cover,
      skillsList: ["Coming soon"],
      imagesList: [game6_cover, ],
      gitLink: game6_git, dlLink: game6_dl,
    },
  ];

  const appProjects = [
    {
      title: "Explore",
      category: "Flutter Mobile App",
      desc: "Educational mobile app & games",
      longDesc: "Designed and coded the front-end UI and educational games of a cross-platform mobile app to teach basic math to children.",
      coverImg: app1_cover,
      skillsList: ["Jira", "Figma", "Git", "Flutter", "Dart", "JavaScript"],
      imagesList: [app1_cover],
      gitLink: app1_git, ytLink: app1_yt, dlLink: app1_dl,
    },
    {
      title: "Connect Four",
      category: "Android Mobile App",
      desc: "Simple game for Android",
      longDesc: "Developed a simple Android application in Java for playing Connect Four on the same phone.",
      coverImg: app2_cover,
      skillsList: ["Git", "Java"],
      imagesList: [app2_cover],
      gitLink: app2_git,
    },
  ];

  const otherProjects = [
    {
      title: "Character System",
      category: "Unity3D Project",
      desc: "Character creator and movement",
      longDesc: "Created an advanced character creation and motion system in Unity with custom shaders. Allows first and third-person.",
      coverImg: other1_cover,
      skillsList: ["Unity3D", "C#"],
      imagesList: [other1_cover, ],
      ytLink: other1_yt,
    },
    {
      title: "TI Bot Maze",
      category: "Embedded Code, 1st Place",
      desc: "Robot code for competition",
      longDesc: "Wrote pathfinding code to allow a Texas Instruments robot to successfully navigate a series of random mazes quickly.",
      coverImg: other2_cover,
      skillsList: ["C"],
      imagesList: [other2_cover, ],
      gitLink: other2_git, ytLink: other2_yt,
    },
    {
      title: "Blender Modeling",
      category: "Info coming soon",
      desc: "Info coming soon",
      longDesc: "Info coming soon",
      coverImg: other3_cover,
      skillsList: ["Info coming soon"],
      imagesList: [other3_cover, ],
    },
    {
      title: "Armonios Oasis",
      category: "Info coming soon",
      desc: "Info coming soon",
      longDesc: "Info coming soon",
      coverImg: other4_cover,
      skillsList: ["Info coming soon"],
      imagesList: [other4_cover, ],
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
