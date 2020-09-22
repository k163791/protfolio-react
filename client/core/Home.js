import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Button, Image, Row, Col } from "react-bootstrap";
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

  const handleChange = () => {};

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
          <h1>{portfolio.name}</h1>
          <div style={{ fontSize: "12px" }}>
            <p>
              {portfolio.email} - {portfolio.phone_number}
            </p>
            <p>Full Stack Engineer</p>
          </div>

          <Row>
            <Col>
              <Button href={"/edit/" + portfolio._id} variant="success">
                Edit Portfolio
              </Button>
            </Col>
            <Col>
              <Button
                variant="primary"
                href="https://drive.google.com/file/d/11hkSNhawd9V22TJgDd_1bceKbOzvfri4/view?usp=sharing"
                target="_blank"
              >
                My Resume
              </Button>
            </Col>
            <Col>
              <Button
                variant="danger"
                href="https://github.com/k163791"
                target="_blank"
              >
                Github
              </Button>
            </Col>
          </Row>
        </div>
      </Jumbotron>
      <About aboutme={portfolio.aboutme} />
      <Tech />
      <Projects projects={portfolio.projects} />
      <Contact />
    </div>
  );
}
