import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import serviceData from '../assets/data/serviceData';
import './services.css';
import { motion } from 'framer-motion';
export default function Services() {
  return (
  <section className='services mt-5'>
    <Container>
      <Row className=' p-1'>
        {
          serviceData.map((item,index) =>(
            <Col lg="3" key={index} className="mb-3" md="4">
          <motion.div whileHover={{scale:1.1}} className="service_item h-100 " style={{background:`${item.bg}`}} >
            <span><i class={item.icon}></i></span>
            <div>
              <h5>{item.title}</h5>
              <p>{item.subtitle}</p>
            </div>
          </motion.div>
        </Col>
          ))
        }
        
      </Row>
    </Container>
  </section>
  )
}
