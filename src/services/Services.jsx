import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import serviceData from '../assets/data/serviceData';
import './services.css';
export default function Services() {
  return (
  <section className='services mt-5'>
    <Container>
      <Row>
        {
          serviceData.map((item,index) =>(
            <Col lg="3" key={index} md="4">
          <div className="service_item h-100" style={{background:`${item.bg}`}} >
            <span><i class={item.icon}></i></span>
            <div>
              <h5>{item.title}</h5>
              <p>{item.subtitle}</p>
            </div>
          </div>
        </Col>
          ))
        }
        
      </Row>
    </Container>
  </section>
  )
}
