import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import hroImg from "../assets/images/hero_img.png";
import Helmet from "../components/Helmet/Helmet";
import "../styles/home.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Services from "../services/Services";
import ProductsList from "../components/UI/ProductsList";
import products from "./../assets/data/products";
import counterImg from '../assets/images/counter-timer-img.png'
import Clock from "../components/UI/Clock";
export default function Home() {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);
  useEffect(() => {
    const filterdTendingProducts = products.filter(
      (item) => item.category === "chair"
    );
    const filterdBestSalesProducts = products.filter(
      (item) => item.category === "sofa"
    );
    setTrendingProducts(filterdTendingProducts);
    setBestSalesProducts(filterdBestSalesProducts)
  }, []);
  const year = new Date().getFullYear();
  return (
    <Helmet title={"Home"}>
      <section className="hero_section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero_content">
                <p className="hero_subtitle">Trending Product In {year}</p>
                <h2>Smart Digital Products </h2>
                <p>
                  electronic commerce or e-commerce is simply the buying and
                  selling of goods and.and selling of goods and{" "}
                </p>
                <motion.button
                  whileTap={{ scale: 1.2 }}
                  className="buy_btn my-3"
                >
                  <Link to="/shop">SHOP NOW </Link>
                </motion.button>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero_img">
                <img className="img-fluid w-75" src={hroImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Services />
      <section className="trending_products my-5">
        <Container>
          <Row>
            <Col lg="12" className=" text-center">
              <h2 className="section_title">Latest Products</h2>
            </Col>
            <ProductsList data={trendingProducts} />
          </Row>
        </Container>
      </section>
      <section className=" best_sales py-5">
        <Container>
          <Row>
            <Col lg="12" className=" text-center">
             <h2 className="section_title">Our Best Sales Products</h2>
            </Col>
            <ProductsList data={bestSalesProducts} />
          </Row>
        </Container>
      </section>
      <section className=" timer_count">
            <Container>
              <Row className=" d-flex align-items-center ">
              
                <Col lg="6" md="6" className=" ">
                  <div className="colo_top_content">
                    <h4 className=" text-white fs-6 mb-2">Our Limited offer</h4>
                    <h3 className=" text-white fs-5 mb-3">Best Quality Chair</h3>
                
                  </div>
                  <Clock/>
                  <motion.button whileTap={{scale:1.2}}className="buy_btn store_btn"><Link to="/shop">Visit store</Link></motion.button>
               </Col>
                <Col lg="6" md="6" className=" text-end">
                  <img src={counterImg} alt="" />
                </Col>
              </Row>
            </Container>
      </section>
    </Helmet>
  );
}
