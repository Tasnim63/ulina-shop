import React from "react";
import "./Footer.css";

import navLogo from "../../assets/images/ulina-logo.png";

import { motion } from "framer-motion";
import { Col, Container, ListGroup, ListGroupItem, Row } from "reactstrap";
import { Link } from "react-router-dom";
export default function Footer() {
  const year =new Date().getFullYear()
  return (
    <>
      <footer className="footer pt-5">
        <Container className=" py-2">
          <Row>
            <Col lg="4 ">
              <div className="logo">
                <motion.img whileTap={{ scale: 1.2 }} src={navLogo} alt="" />
              </div>
              <p className="footer_text mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                nostrum hic consequuntur cupiditate officia consequatur,
              </p>
            </Col>
            <Col lg="3">
              <div className="footer_quick_link">
                <h4 className=" quick_links fw-bold">Top category</h4>
                <ListGroup className=" mb-3 ">
                  <ListGroupItem className=" border-0 ps-0">
                    <Link to="#">Mobile Phone</Link>
                  </ListGroupItem>
                  <ListGroupItem className=" border-0 ps-0">
                    <Link to="#">Mordern Sofa</Link>
                  </ListGroupItem>
                  <ListGroupItem className=" border-0 ps-0">
                    <Link to="#">New Chair</Link>
                  </ListGroupItem>
                  <ListGroupItem className=" border-0 ps-0">
                    <Link to="#">Smart Watches</Link>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
            <Col lg="2">
              <div className="footer_quick_link">
                <h4 className=" quick_links fw-bold">Useful Links</h4>
                <ListGroup className=" mb-3">
                  <ListGroupItem className=" border-0 ps-0">
                    <Link to="/shop">Shop</Link>
                  </ListGroupItem>
                  <ListGroupItem className=" border-0 ps-0">
                    <Link to="/cart">Cart</Link>
                  </ListGroupItem>
                  <ListGroupItem className=" border-0 ps-0">
                    <Link to="/login">Login</Link>
                  </ListGroupItem>
                  <ListGroupItem className=" border-0 ps-0">
                    <Link to="#">privacy policy</Link>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
            <Col lg="3">
              <div className="footer_quick_link">
                <h4 className=" quick_links fw-bold">Contact</h4>
                <ListGroup className=" mb-3 ">
                  <ListGroupItem className=" border-0 ps-0 d-flex  ">
                    <span>
                      <i class="ri-map-pin-line me-2"></i>
                    </span>
                    <p>123,Bangladesh</p>
                  </ListGroupItem>
                  <ListGroupItem className=" border-0 ps-0 d-flex ">
                    <span>
                      <i class="ri-phone-line me-2"></i>
                    </span>
                    <p>+656666665</p>
                  </ListGroupItem>
                  <ListGroupItem className=" border-0 ps-0 d-flex ">
                    <span>
                      <i class="ri-mail-line me-2"></i>
                    </span>
                    <p>abc@gmail.com</p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
            <Col lg="12" className="footer-copy-right text-center pt-4">copyright {year} Design by Tamanna .All rights reserved</Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}
