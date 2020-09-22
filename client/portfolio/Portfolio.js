import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button, Modal } from "react-bootstrap";
import { list, update, updateProjects } from "./api-portfolio";
import { Redirect } from "react-router";

export default function Portfolio({ match }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [portfolio, setPortfolio] = useState({
    name: "",
    email: "",
    github: "",
    linkedin: "",
    aboutme: "",
    phone_number: "",
  });

  const [projects, setProjects] = useState({
    name: "",
    technologies: [],
    description: "",
  });

  const [redirectTo, setRedirectTo] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    list(signal).then((data) => {
      if (data && data.error) {
        console.log(data.error);
      } else {
        setPortfolio(data[0]);
      }
    });

    return function cleanup() {
      abortController.abort();
    };
  }, []);

  const clickSubmit = () => {
    const portfolioData = {
      name: portfolio.name || undefined,
      email: portfolio.email || undefined,
      github: portfolio.github || undefined,
      linkedin: portfolio.linkedin || undefined,
      phone_number: portfolio.phone_number || undefined,
      aboutme: portfolio.aboutme || undefined,
    };

    update(
      {
        portfolioId: match.params.portfolioId,
      },
      portfolioData
    ).then((data) => {
      if (data && data.error) {
        setPortfolio({ ...portfolio, error: data.error });
      } else {
        setPortfolio({ ...portfolio, portfolioId: data._id });
      }
    });
  };

  const handleChange = (name) => (event) => {
    setPortfolio({ ...portfolio, [name]: event.target.value });
    console.log(portfolio.aboutme);
  };

  const handleProjectChange = (name) => (event) => {
    setProjects({ ...projects, [name]: event.target.value });
  };

  const handleTech = (event) => {
    var tech = document.getElementById("tech").value;
    tech = tech.split(" ");
    setProjects({ ...projects, technologies: tech });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    var forward = true;
    if (projects.name.length <= 0) {
      alert("Name is Required");
      forward = false;
    }
    if (projects.technologies.length == 0) {
      alert("Technologies are required");
      forward = false;
    }

    if (projects.description.length <= 0) {
      alert("Description is required");
      forward = false;
    }

    if (forward) {
      const projectsData = {
        name: projects.name || undefined,
        technologies: projects.technologies || [],
        description: projects.description || undefined,
      };

      updateProjects(
        {
          portfolioId: match.params.portfolioId,
        },
        projectsData
      ).then((data) => {
        if (data && data.error) {
          console.log(data);
        } else {
          console.log(data);
          handleClose();
          setRedirectTo(true);
        }
      });
    }
  };

  if (redirectTo) {
    return <Redirect to="/" />;
  }

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
                type="text"
                placeholder="Project Name"
                onChange={handleProjectChange("name")}
                defaultValue={projects.name}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Technologies</Form.Label>
              <Form.Control
                name="tech"
                id="tech"
                type="text"
                placeholder="For Example; Node React Mongo etc...(with spaces)"
                onChange={handleTech}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows="5"
                name="description"
                onChange={handleProjectChange("description")}
                defaultValue={projects.description}
              />
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
          <Form.Group>
            <Form.Label>Name</Form.Label>

            <Form.Control
              type="text"
              placeholder=""
              defaultValue={portfolio.name}
              onChange={handleChange("name")}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Github</Form.Label>
            <Form.Control
              name="github"
              id="github"
              type="text"
              placeholder="Your Github Profile"
              defaultValue={portfolio.github}
              onChange={handleChange("github")}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>LinkedIn</Form.Label>
            <Form.Control
              type="text"
              name="linkedin"
              id="linkedin"
              placeholder="Your LinkedIn Profile"
              defaultValue={portfolio.linkedin}
              onChange={handleChange("linkedin")}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              name="email"
              defaultValue={portfolio.email}
              onChange={handleChange("email")}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="03323696481"
              name="phone_number"
              defaultValue={portfolio.phone_number}
              onChange={handleChange("phone_number")}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>About Me</Form.Label>
            <Form.Control
              as="textarea"
              rows="10"
              name="aboutme"
              id="aboutme"
              defaultValue={portfolio.aboutme}
              onChange={handleChange("aboutme")}
            />
          </Form.Group>

          <Button variant="primary" onClick={clickSubmit}>
            Save
          </Button>
        </Form>
      </Container>
    </div>
  );
}
