import React, {  useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommoSection from "../components/UI/CommoSection";
import{toast} from 'react-toastify'
import "../styles/product-details.css";
import products from "../assets/data/products";
import { motion } from "framer-motion";
import ProductsList from "../components/UI/ProductsList";
import { useDispatch } from "react-redux";
import { cartActions } from "../redux/slice/cartSlice";
export default function ProductDetails() {
  const [tab, setTab] = useState("desc");
  const reviewsUser = useRef('');
  const reviewMsg= useRef('');
  const dispatch = useDispatch();
  const [rating,setRating] = useState(null)
  const { id } = useParams();
  const product = products.find((item) => item.id === id);
  const {
    imgUrl,
    productName,
    price,
    avgRating,
    reviews,
    description,
    category,
    shortDesc,
  } = product;
  const relatedProducts=products.filter(item => item.category === category );
  const submitHandler = (e) =>{
   e.preventDefault()
   const reviewUserName =  reviewsUser.current.value
   const reviewUserMsg =  reviewMsg.current.value
   console.log(reviewUserName, reviewUserMsg);
  };
  const addToCart =()=>{
    dispatch(cartActions.addItems({
      id,
      image:imgUrl,
      productName,
      price,


    }))
toast.success('product added successfully')
  }
// useEffect(()=>{
// window.screenTop(0,0)
// },[product])
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
                    <span onClick={() =>setRating(1) }>
                      <i class="ri-star-s-fill"></i>
                    </span>
                    <span onClick={() =>setRating(2) }>
                      <i class="ri-star-s-fill"></i>
                    </span>
                    <span onClick={() =>setRating(3) }>
                      <i class="ri-star-s-fill"></i>
                    </span>
                    <span onClick={() =>setRating(4) }>
                      <i class="ri-star-s-fill"></i>
                    </span>
                    <span onClick={() =>setRating(5) }>
                      <i class="ri-star-half-fill"></i>
                    </span>
                  </div>
                  <p>
                    (<span>{avgRating}</span> ratings)
                  </p>
                </div>
               <div className=" d-flex align-items-center gap-5">
               <span className="product_price">${price}</span>
                <span>Category:{category}</span>
               </div>
                <p className=" mt-3">{shortDesc}</p>
                <motion.button
                  whileTap={{ scale: 1.2 }}
                  className=" buy_btn mt-3"
                onClick={addToCart} >
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
                      <h4>Leave your Comments</h4>
                      <form  onSubmit={submitHandler}>
                        <div className="form_group ">
                          <input type="text" placeholder="Enter Your Name" />
                        </div>
                        <div className="form_group py-3 d-flex align-items-center gap-5 rating_group">
                         <span>1<i class="ri-star-fill"></i></span>
                         <span>2<i class="ri-star-fill"></i></span>
                         <span>3<i class="ri-star-fill"></i></span>
                         <span>4<i class="ri-star-fill"></i></span>
                         <span>5<i class="ri-star-fill"></i></span>
                         
                        </div>
                        <div className="form_group">
                          <textarea ref={reviewMsg} rows={4}  type="text" placeholder="Review Message...." />
                        </div>
                        <button type="submit" className="buy_btn  my-3">submit</button>
                      </form>
                    </div>
                  </div>
                </div>
              )}
            </Col>
            <Col lg="12" className=" mt-5">
              <h2 className=" related_title">You might also like</h2>
             <ProductsList data={relatedProducts}/>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}
