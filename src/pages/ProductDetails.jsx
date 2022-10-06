import React from "react";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommoSection from "../components/UI/CommoSection";
import "../styles/product-details.css";
import products from "../assets/data/products";
import { motion } from "framer-motion";
export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((item) => item.id === id);
  const {
    imgUrl,
    productName,
    price,
    avgRating,
    reviews,
    description,
    shortDesc,
  } = product;
  return (
    <Helmet title={productName}>
      <CommoSection title={productName} />
      <section className=" pt-0">
        <Container>
          <Row>
            <Col lg="6">
              <img src={imgUrl} alt="" />
            </Col>
            <Col lg="6">
              <div className="product_details py-3">
                <h2>{productName}</h2>
                <div className="product_rating d-flex align-items-center gap-5 mb-3">
                  <div>
                    <span>
                      <i class="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i class="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i class="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i class="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i class="ri-star-half-fill"></i>
                    </span>
                  </div>
                  <p>
                    (<span>{avgRating}</span> ratings)
                  </p>
                </div>
                <span className="product_price">${price}</span>
                <p className=" mt-3">{shortDesc}</p>
                <motion.button
                  whileTap={{ scale: 1.2 }}
                  className=" buy_btn mt-3"
                >
                  Add to Cart
                </motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className=" py-5">
        <Container>
          <Row>
            <Col lg='12'>
              <div className="tab-wrapper d-flex align-items-center gap-5">
                <h6>Description</h6>
                <h6>Reviews ({reviews.length})</h6>
              </div>
              <div className="tab_content">
<p>{description}</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}
