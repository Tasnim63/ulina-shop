import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, FormGroup, Row } from "reactstrap";
import '../styles/login.css';
import Helmet from "../components/Helmet/Helmet";
export default function Login() {
  return (
    <Helmet title="Login">
      <section className=" py-5">
        <Container>
          <Row>
            <Col lg="6"  className=" m-auto text-center">
            <h3 className=" fw-bold fs-4">Login</h3>
            <form className=" auth_form">
              <FormGroup className=" form-group">
                <input type="email" placeholder="Enter your email" />
              </FormGroup>
              <FormGroup className=" form-group">
                <input type="password" placeholder="Enter your password" />
              </FormGroup>
              <button className=" buy_btn auth_btn">Login</button>
             <p> Don't  have an account?  <Link to="/signup"> Create an account</Link></p>
            </form>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}
