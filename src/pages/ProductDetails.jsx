import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommoSection from "../components/UI/CommoSection";
import "../styles/product-details.css";
import products from "../assets/data/products";
import { motion } from "framer-motion";
export default function ProductDetails() {
  const [tab, setTab] = useState("desc");
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
            <Col lg="12">
              <div className="tab-wrapper d-flex align-items-center gap-5">
                <h6
                  className={`${tab === "desc" ? "active_tab" : ""}`}
                  onClick={() => setTab("desc")}
                >
                  Description
                </h6>
                <h6
                  className={`${tab === "rev" ? "active_tab" : ""}`}
                  onClick={() => setTab("rev")}
                >
                  Reviews ({reviews.length})
                </h6>
              </div>
              {tab === "desc" ? (
                <div className="tab_content py-4">
                  <p>{description}</p>
                </div>
              ) : (
                <div className=" product_review mt-5">
                  <div className="review_wrapper pt-4">
                    <ul>
                      {reviews?.map((item, index) => (
                        <li key={index} className="mb-4">
                          <h6>Rimi Akter</h6>
                          <span>{item.rating}(average rating)</span>
                          <p>{item.text}</p>
                        </li>
                      ))}
                    </ul>
                    <div className="review_form">
                      <form>
                        <div className="form_group">
                          <input type="text" placeholder="Enter Your Name" />
                        </div>
                        <div className="form_group">
                         <span>1<i class="ri-star-fill"></i></span>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}
