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
                  I have been working on laravel for the past 8 months and am
                  fairly proficient in it
                </p>
              </Col>
              <Col>
                <Image
                  src={express}
                  style={{ height: "200px", width: "200px" }}
                />
                <h5 style={{ fontWeight: "bold" }}>Express</h5>
                <p>
                  I have been working on laravel for the past 8 months and am
                  fairly proficient in it
                </p>
              </Col>
              <Col>
                <Image
                  src={ReactLogo}
                  style={{ height: "200px", width: "200px" }}
                />
                <h5 style={{ fontWeight: "bold" }}>React</h5>
                <p>
                  I have been working on laravel for the past 8 months and am
                  fairly proficient in it
                </p>
              </Col>
              <Col>
                <Image
                  src={nodejslogo}
                  style={{ height: "200px", width: "200px" }}
                />
                <h5 style={{ fontWeight: "bold" }}>Nodejs</h5>
                <p>
                  I have been working on laravel for the past 8 months and am
                  fairly proficient in it
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
                  I have been working on laravel for the past 8 months and am
                  fairly proficient in it
                </p>
              </Col>
              <Col>
                <Image src={psql} style={{ height: "200px", width: "200px" }} />
                <h5 style={{ fontWeight: "bold" }}>PSQL</h5>
                <p>
                  I have been working on laravel for the past 8 months and am
                  fairly proficient in it
                </p>
              </Col>
              <Col>
                <Image
                  src={Laravel}
                  style={{ height: "200px", width: "200px" }}
                />
                <h5 style={{ fontWeight: "bold" }}>Laravel</h5>
                <p>
                  I have been working on laravel for the past 8 months and am
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
