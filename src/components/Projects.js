import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import colorSharp2 from "../assets/img/color-sharp2.png";

// PROJECTS //
// Web Project 1
import web1_cover from "../assets/img/web1_cover.png";
import web1_1 from "../assets/img/web1_cover.png";
let web1_git = "http://www.google.com";
let web1_yt = "http://www.youtube.com";
let web1_dl = "http://www.gmail.com";



export const Projects = () => {

  const webProjects = [
    {
      title: "Tactic Chess",
      category: "Website",
      desc: "This is a short description",
      longDesc: "This is a longer description. It takes up more space and is shown on the back of the card. It goes up to 4 lines.",
      coverImg: web1_cover,
      skillsList: ["Flutter", "React", "Jira", "Agile", "Git", "Unit Testing"],
      imagesList: [web1_1, web1_cover],
      gitLink: web1_git, ytLink: web1_yt, dlLink: web1_dl,
    },
    {
      title: "To be added",
      category: "Website",
      desc: "This is a short description",
      longDesc: "This is a longer description. It takes up more space and is shown on the back of the card. It goes up to 4 lines.",
      coverImg: web1_cover,
      skillsList: ["Flutter", "React", "Jira", "Agile", "Git", "Unit Testing"],
      imagesList: [web1_1, web1_cover],
      gitLink: web1_git, ytLink: web1_yt, dlLink: web1_dl,
    },
    {
      title: "To be added",
      category: "Website",
      desc: "This is a short description",
      longDesc: "This is a longer description. It takes up more space and is shown on the back of the card. It goes up to 4 lines.",
      coverImg: web1_cover,
      skillsList: ["Flutter", "React", "Jira", "Agile", "Git", "Unit Testing"],
      imagesList: [web1_1, web1_cover],
      dlLink: web1_dl,
    },
    {
      title: "To be added",
      category: "Website",
      desc: "This is a short description",
      longDesc: "This is a longer description. It takes up more space and is shown on the back of the card. It goes up to 4 lines.",
      coverImg: web1_cover,
      skillsList: ["Flutter", "React", "Jira", "Agile", "Git", "Unit Testing"],
      imagesList: [web1_1, web1_cover],
      gitLink: web1_git,
    },
    {
      title: "To be added",
      category: "Website",
      desc: "This is a short description",
      longDesc: "This is a longer description. It takes up more space and is shown on the back of the card. It goes up to 4 lines.",
      coverImg: web1_cover,
      skillsList: ["Flutter", "React", "Jira", "Agile", "Git", "Unit Testing"],
      imagesList: [web1_1, web1_cover],
      gitLink: web1_git, dlLink: web1_dl,
    },
  ];

  const gameProjects = [
    {
      title: "Game Project 1",
      category: "Game Development",
      desc: "Description 1",
      longDesc: "This is a longer description.",
      coverImg: web1_cover,
      skillsList: ["C#"],
      imagesList: [web1_1, ],
      gitLink: web1_git, ytLink: web1_yt, dlLink: web1_dl,
    },
    {
      title: "Game Project 2",
      category: "Game Development",
      desc: "Description 2",
      longDesc: "This is a longer description.",
      coverImg: web1_cover,
      skillsList: ["C++", "Unreal"],
      imagesList: [web1_1, ],
      gitLink: web1_git, ytLink: web1_yt, dlLink: web1_dl,
    },
    {
      title: "Game Project 3",
      category: "Game Development",
      desc: "Description 3",
      longDesc: "This is a longer description.",
      coverImg: web1_cover,
      skillsList: ["C#", "React"],
      imagesList: [web1_1, ],
      gitLink: web1_git, ytLink: web1_yt, dlLink: web1_dl,
    },
  ];

  const appProjects = [
    {
      title: "App Project 1",
      category: "Mobile App Development",
      desc: "Mobile app for senior design",
      longDesc: "This is a longer description.",
      coverImg: web1_cover,
      skillsList: [],
      imagesList: [web1_1, ],
      gitLink: web1_git, ytLink: web1_yt, dlLink: web1_dl,
    },
  ];

  const otherProjects = [
    {
      title: "Other Project 1",
      category: "Other",
      desc: "Description 1",
      longDesc: "This is a longer description.",
      coverImg: web1_cover,
      skillsList: [],
      imagesList: [web1_1, ],
      gitLink: web1_git, ytLink: web1_yt, dlLink: web1_dl,
    },
    {
      title: "Other Project 2",
      category: "Other",
      desc: "Description 2",
      longDesc: "This is a longer description.",
      coverImg: web1_cover,
      skillsList: [],
      imagesList: [web1_1, ],
      gitLink: web1_git, ytLink: web1_yt, dlLink: web1_dl,
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
