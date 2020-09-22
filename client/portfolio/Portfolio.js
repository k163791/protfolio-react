import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button, Modal } from "react-bootstrap";
// import { read } from "api-portfolio";

export default function Portfolio({ match }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    var selected = document.getElementById("cars");
    var technologies = [];
    console.log(selected);
    var name = document.getElementById("name").value;
    // console.log(technologies);
  };

  // useEffect(() => {
  //   const abortController = new AbortController();
  //   const signal = abortController.signal;

  //   read(
  //     {
  //       userId: match.params.userId,
  //     },
  //     signal
  //   ).then((data) => {
  //     if (data && data.error) {
  //       setValues({ ...values, error: data.error });
  //     } else {
  //       setValues({ ...values, name: data.name, email: data.email });
  //     }
  //   });
  //   return function cleanup() {
  //     abortController.abort();
  //   };
  // }, [match.params.userId]);

  return (
    <div style={{ margin: "100px" }}>
      <Button variant="success" onClick={handleShow} className="float-right">
        Add Project
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Project Name</Form.Label>
              <Form.Control
                name="name"
                id="name"
                type="name"
                placeholder="Project Name"
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Technologies</Form.Label>

              <Form.Control
                as="select"
                name="technologies"
                id="tech"
                multiple
                required
              >
                <option value="1">1</option>
                <option value="2">2</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows="3" />
            </Form.Group>
            <Button variant="primary" onClick={handleSubmit}>
              Save Changes
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Container>
        <h1>Portfolio Data</h1>
        <Form>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="" />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Github</Form.Label>
            <Form.Control type="text" placeholder="Your Github Profile" />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>LinkedIn</Form.Label>
            <Form.Control type="text" placeholder="Your LinkedIn Profile" />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>About Me</Form.Label>
            <Form.Control as="textarea" rows="10" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Save
          </Button>
        </Form>
      </Container>
    </div>
  );
}
