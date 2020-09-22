import React from "react";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import Laravel from "./../assets/images/laravel.png";
import ReactLogo from "./../assets/images/react.png";
import nodejslogo from "./../assets/images/nodejslogo.png";
import mongo from "./../assets/images/mongo.jpg";
import mysql from "./../assets/images/mysql.png";
import psql from "./../assets/images/psql.jpg";
import express from "./../assets/images/express.png";

export default function Tech() {
  return (
    <div id="technologies" style={{ marginBottom: "100px" }}>
      <Container>
        <h1 style={{ color: "#F4B400" }}>Technologies</h1>
        <hr />
        <p>These are some of the technologies that i have worked on</p>
        <Card>
          <Card.Body style={{ margin: "30px", textAlign: "center" }}>
            <Row>
              <Col>
                <Image
                  src={mongo}
                  style={{ height: "200px", width: "200px" }}
                />
                <h5 style={{ fontWeight: "bold" }}>MongoDB</h5>
                <p>
                  I have not worked on MongoDB on big scalable apps, i've only
                  used it like 5 to 6 times for basic small scale projects
                </p>
              </Col>
              <Col>
                <Image
                  src={express}
                  style={{ height: "200px", width: "200px" }}
                />
                <h5 style={{ fontWeight: "bold" }}>Express</h5>
                <p>
                  I have extensive knowledge of Express framework, i have been
                  exploring new things in it and have a really good undestanding
                  of how to make backend calls, rendering static files and also
                  stacking everthing into one server and rendering the server
                  and client all in one stack
                </p>
              </Col>
              <Col>
                <Image
                  src={ReactLogo}
                  style={{ height: "200px", width: "200px" }}
                />
                <h5 style={{ fontWeight: "bold" }}>React</h5>
                <p>
                  I am proficient in React, states, props etc, i know how to
                  handle almost everything, but i'm not that good at designing
                  front-end
                </p>
              </Col>
              <Col>
                <Image
                  src={nodejslogo}
                  style={{ height: "200px", width: "200px" }}
                />
                <h5 style={{ fontWeight: "bold" }}>Nodejs</h5>
                <p>
                  Node is just a run time environment to run javascript on a
                  system, i have been working on Node and express for almost 1.5
                  years now.
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <Image
                  src={mysql}
                  style={{ height: "200px", width: "200px" }}
                />
                <h5 style={{ fontWeight: "bold" }}>MySQL</h5>
                <p>
                  I have used MySQL for big scale projects like a pharmacy
                  management integerated with hospital, patients and doctors
                  management system, i can say that i'm very proficient in it.
                </p>
              </Col>
              <Col>
                <Image src={psql} style={{ height: "200px", width: "200px" }} />
                <h5 style={{ fontWeight: "bold" }}>PSQL</h5>
                <p>
                  I just used Postgres for like 2 small projects and haven't
                  used it since but i have a understanding of how it works
                </p>
              </Col>
              <Col>
                <Image
                  src={Laravel}
                  style={{ height: "200px", width: "200px" }}
                />
                <h5 style={{ fontWeight: "bold" }}>Laravel</h5>
                <p>
                  I have been working on laravel for almost an year now and am
                  fairly proficient in it
                </p>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}
