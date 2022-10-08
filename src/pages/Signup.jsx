

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Col, Container, FormGroup, Row } from "reactstrap";
import '../styles/login.css';
import Helmet from "../components/Helmet/Helmet";
export default function Signup() {
  const [username,setUsername] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [file,setFile] = useState(null);

  return (
    <Helmet title="signup">
      <section className=" py-5">
        <Container>
          <Row>
            <Col lg="6"  className=" m-auto text-center">
            <h3 className=" fw-bold fs-4 py-3">SignUp</h3>
            <form className=" auth_form">
              <FormGroup className=" form-group">
                <input className=" w-100" type="text" placeholder="Enter your name" value={username} onChange={e => setUsername(e.target.value)}/>
              </FormGroup>
              <FormGroup className=" form-group">
                <input className=" w-100" type="email" placeholder="Enter your email" value={email} onChange={e => setEmail(e.target.value)}/>
              </FormGroup>
              <FormGroup className=" form-group">
                <input className=" w-100"  
                type="file" 
                 onChange={e => setFile(e.target.files[0])} />
              </FormGroup>
              <button type="submit" className="w-100 mt-3 buy_btn auth_btn">create an account</button>
             <p className=" text-white pt-4">Already   have an account?  <Link to="/login"> login now</Link></p>
            </form>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}
