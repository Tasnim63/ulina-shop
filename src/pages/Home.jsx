import React from 'react'
import Helmet from '../components/Helmet/Helmet'
import {Container ,Row ,Col} from 'reactstrap';
import hroImg from '../assets/images/hero_img.png';

export default function Home() {
  const year =new Date().getFullYear()
  return (
   <Helmet title={'Home'}>
    <section className='hero_secton'>
          <Container>
            <Row>
                <Col lg="6" md="6">
                  <div className="hero_content">
                    <p className="hero_subtitle">
                      Trending Product In {year}
                    </p>
                    <h2>Make Your Interior More Minimalist & Modern</h2>
                    <p>electronic commerce or e-commerce is simply the buying and selling of goods and services using the internet, when shopping online. However, the term is often used to describe all of a seller's efforts, when selling products directly to consumers.</p>
                    <button className='buy_btn'>SHOP NOW</button>
                  </div>
                </Col>
                <Col lg="6" md="6" >
                  <div className="hero_img">
                    <img className='img-fluid' src={hroImg} alt="" />
                  </div>
                </Col>
            </Row>
          </Container>
    </section>
   </Helmet>
  )
}
