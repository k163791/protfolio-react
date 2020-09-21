import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import me from "./../assets/images/me.jpg";

export default function About() {
  return (
    <Container id="about">
      <h1>About Me</h1>
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
          <Image src={me} style={{ height: "500px", width: "100%" }} rounded />
        </Col>
      </Row>
    </Container>
  );
}
