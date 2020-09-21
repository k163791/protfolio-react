import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import me from "./../assets/images/me1.jpg";

export default function About() {
  return (
    <Container id="about" style={{ marginBottom: "100px" }}>
      <h1 style={{ color: "#DB4437" }}>About Me</h1>
      <hr />
      <Row style={{ justifyContent: "space-evenly" }}>
        <Col>
          <p>
            absdjka kjasdkahsk djahskdj haskjdh aksjdh akjsdh kajsdh kajshdk
            jashdkj has ansdjk asndjk askdj asjdkajsdh kjash dkjashd kajshd
            kjash kjadhk jashd jkash kjashk jash alsdjakljsdakjsdha
          </p>
        </Col>
        <Col>
          <Image src={me} style={{ height: "100%", width: "100%" }} rounded />
        </Col>
      </Row>
    </Container>
  );
}
