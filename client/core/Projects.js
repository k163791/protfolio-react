import React from "react";
import {
  Container,
  Row,
  Card,
  ListGroup,
  ListGroupItem,
  Image,
} from "react-bootstrap";
import Laravel from "./../assets/images/laravel.png";
import ReactLogo from "./../assets/images/react.png";
import nodejslogo from "./../assets/images/nodejslogo.png";
import mongo from "./../assets/images/mongo.jpg";
import mysql from "./../assets/images/mysql.png";
import psql from "./../assets/images/psql.jpg";
import express from "./../assets/images/express.png";

export default function Projects() {
  const projects = [
    {
      id: 1,
      name: "Stadium Management System",
      technologies: ["Laravel", "MySQL"],
      description:
        "This is the description for stadium management system we made for our DB Project, it's the worst project we have ever made but it's something",
    },
    {
      id: 2,
      name: "Friend Finder",
      technologies: ["Node", "Mongo", "Express", "React"],
      description: "friend finder",
    },
    {
      id: 3,
      name: "Friend Finder",
      technologies: ["Node", "Mongo", "Express", "React"],
      description: "friend finder",
    },
    {
      id: 4,
      name: "Stadium Management System",
      technologies: ["Laravel", "MySQL"],
      description:
        "This is the description for stadium management system we made for our DB Project, it's the worst project we have ever made but it's something",
    },
    {
      id: 5,
      name: "Friend Finder",
      technologies: ["Node", "Mongo", "Express", "React"],
      description: "friend finder",
    },
    {
      id: 6,
      name: "Friend Finder",
      technologies: ["Node", "Mongo", "Express", "React"],
      description: "friend finder",
    },
  ];

  const checkTechnology = (tech) => {
    if (tech === "Node") return nodejslogo;
    else if (tech === "Laravel") return Laravel;
    else if (tech === "React") return ReactLogo;
    else if (tech === "Express") return express;
    else if (tech === "Mongo") return mongo;
    else if (tech === "MySQL") return mysql;
    else if (tech === "PSQL") return psql;
    else return null;
  };

  return (
    <div id="projects" style={{ marginBottom: "100px" }}>
      <Container>
        <h1 style={{ color: "#0F9D58" }}>My Projects</h1>
        <hr />
        <p>Some of My Projects</p>
        <Row
          style={{
            justifyContent: "space-evenly",
            alignItems: "space-around",
          }}
        >
          {projects.map((project) => {
            return (
              <div style={{ padding: "20px" }}>
                <Card
                  key={project.id}
                  style={{
                    width: "18rem",
                    height: "100%",
                  }}
                >
                  <Container>
                    <Card.Header style={{ fontWeight: "bold" }}>
                      {project.name}
                    </Card.Header>
                    <Card.Body>
                      <h6 style={{ fontWeight: "bold" }}>Description</h6>
                      <p>{project.description}</p>
                      <h6 style={{ fontWeight: "bold" }}>Technologies Used</h6>
                      <ListGroup>
                        {project.technologies.map((tech, id) => {
                          return (
                            <ListGroup.Item key={id}>
                              {tech}
                              <Image
                                className="float-right"
                                src={checkTechnology(tech)}
                                style={{ height: "50px", width: "50px" }}
                              />
                            </ListGroup.Item>
                          );
                        })}
                      </ListGroup>
                    </Card.Body>
                  </Container>
                </Card>
              </div>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}
