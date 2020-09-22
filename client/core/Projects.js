import React, { useEffect, useState } from "react";
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
import techlogo from "./../assets/images/tech.jpg";
import { list } from "./../portfolio/api-portfolio";

export default function Projects({ projects }) {
  const checkTechnology = (tech) => {
    if (tech === "Node") return nodejslogo;
    else if (tech === "Laravel" || tech === "laravel" || tech === "LARAVEL")
      return Laravel;
    else if (tech === "React" || tech === "react" || tech === "REACT")
      return ReactLogo;
    else if (tech === "Express" || tech === "express" || tech === "EXPRESS")
      return express;
    else if (
      tech === "Mongo" ||
      tech === "mongo" ||
      tech === "MONGO" ||
      tech === "MongoDB" ||
      tech === "mongodb" ||
      tech === "MONGODB"
    )
      return mongo;
    else if (tech === "MySQL" || tech === "mysql" || tech === "MYSQL")
      return mysql;
    else if (tech === "PSQL" || tech === "psql") return psql;
    else return techlogo;
  };

  const displayProjects = () => {
    if (projects) {
      return projects.map((project) => {
        return (
          <div style={{ padding: "20px" }}>
            <Card
              key={project._id}
              style={{
                width: "18rem",
                height: "100%",
              }}
            >
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
            </Card>
          </div>
        );
      });
    }
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
          {displayProjects()}
        </Row>
      </Container>
    </div>
  );
}
