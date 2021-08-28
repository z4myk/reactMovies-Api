import React from "react";
import { Navbar, Form, FormControl } from "react-bootstrap";
import "../App.css";

export const Navigation = (props) => {
  return (
    <>
      <Navbar bg="dark" expand="lg" className="text-light">
        <div className="container">
          <Navbar.Brand href="#" className="text-light">
            <span className="text-primary">React</span>Movies
          </Navbar.Brand>
          {/* <Navbar.Toggle aria-controls="navbarScroll" /> */}
          <Form className="d-flex navbarSearch">
            <FormControl
              className="border-primary buscador"
              type="search"
              placeholder="Buscar"
              aria-label="Search"
              onChange={props.handleInputChange}
              />
          </Form>
        </div>
      </Navbar>
    </>
  );
};
