import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import hroImg from '../assets/images/hero_img.png';
import Helmet from '../components/Helmet/Helmet';
import '../styles/home.css';
import {Link} from 'react-router-dom'
import { motion } from 'framer-motion';
export default function Home() {
  const year =new Date().getFullYear()
  return (
   <Helmet title={'Home'}>
    <section className='hero_section'>
          <Container>
            <Row>
                <Col lg="6" md="6">
                  <div className="hero_content">
                    <p className="hero_subtitle">
                      Trending Product In {year}
                    </p>
                    <h2>Smart Digital Products & Electronic Modern Devices</h2>
                    <p>electronic commerce or e-commerce is simply the buying and selling of goods and services using the internet, when shopping online. However, the term is often used to describe all of a seller's efforts, when selling products directly to consumers.</p>
                    <motion.button whileTap={{scale:1.2}} className='buy_btn'><Link to="/shop">SHOP NOW </Link></motion.button>
                  </div>
                </Col>
                <Col lg="6" md="6" >
                  <div className="hero_img">
                    <img className='img-fluid w-75' src={hroImg} alt="" />
                  </div>
                </Col>
            </Row>
          </Container>
    </section>
   </Helmet>
  )
}
