import React from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Button, Image, Row } from "react-bootstrap";
import backgr from "./../assets/images/background2.jpg";
import Avatar from "./../assets/images/avatar.png";
import Tech from "./Technologies";
import About from "./AboutMe";
import Projects from "./Projects";
import Contact from "./Contact";
export default function Home() {
  return (
    <div id="home">
      <Jumbotron
        fluid
        style={{
          backgroundImage: `url(${backgr})`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            textAlign: "center",
            color: "#fff",
            fontWeight: "bold",
          }}
        >
          <Image
            src={Avatar}
            roundedCircle
            style={{ height: "171px", width: "180px" }}
          />
          <h1>Uzair Hussain</h1>
          <div style={{ fontSize: "12px" }}>
            <p>k163791@nu.edu.pk - 03323696481</p>
            <p>Full Stack Engineer</p>
          </div>

          <Row
            style={{
              justifyContent: "space-evenly",
            }}
          >
            <Button href="/edit" variant="success">
              Edit Portfolio
            </Button>

            <Button variant="primary">My Resume</Button>
          </Row>
        </div>
      </Jumbotron>
      <About />
      <Tech />
      <Projects />
      <Contact />
    </div>
  );
}
