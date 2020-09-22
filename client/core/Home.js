import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Button, Image, Row } from "react-bootstrap";
import backgr from "./../assets/images/background2.jpg";
import Avatar from "./../assets/images/avatar.png";
import Tech from "./Technologies";
import About from "./AboutMe";
import Projects from "./Projects";
import Contact from "./Contact";
import { list } from "./../portfolio/api-portfolio";

export default function Home() {
  const [portfolio, setPortfolio] = useState({});
  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    list(signal).then((data) => {
      if (data && data.error) {
        console.log(data.error);
      } else {
        setPortfolio(data[0]);
        console.log(data[0]);
      }
    });

    return function cleanup() {
      abortController.abort();
    };
  }, []);

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
            <Button href={"/edit/" + portfolio._id} variant="success">
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
