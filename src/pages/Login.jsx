import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Col, Container, FormGroup, Row } from "reactstrap";
import '../styles/login.css';
import Helmet from "../components/Helmet/Helmet";
export default function Login() {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  return (
    <Helmet title="Login">
      <section className=" py-5">
        <Container>
          <Row>
            <Col lg="6"  className=" m-auto text-center">
            <h3 className=" fw-bold fs-4 py-3">Login</h3>
            <form className=" auth_form">
              <FormGroup className=" form-group">
                <input className=" w-100" type="email" placeholder="Enter your email" value={email} onChange={e => setEmail(e.target.value)}/>
              </FormGroup>
              <FormGroup className=" form-group">
                <input className=" w-100"  type="password" placeholder="Enter your password"  value={password} onChange={e => setPassword(e.target.value)} />
              </FormGroup>
              <button type="submit" className="w-100 mt-3 buy_btn auth_btn">Login</button>
             <p className=" text-white pt-4"> Don't  have an account?  <Link to="/signup"> Create an account</Link></p>
            </form>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}
