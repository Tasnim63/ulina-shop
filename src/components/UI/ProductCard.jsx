import React from "react";
import { Col } from "reactstrap";
import { ToastContainer, toast } from 'react-toastify';
import "../../styles/product-card.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/slice/cartSlice";
export default function ProductCard({ item }) {

const dispatch=useDispatch()
const addToCart=()=>{
  dispatch(cartActions.addItems({
    id:item.id,
    productName:item.productName,
    price:item.price,
    image:item.imgUrl,
  }));
toast.success('product added successfully')
}


  return (
    <>
      <Col lg="3" md="4" className=" mb-2">
        <div className="product_item">
          <div className="product_img">
            <motion.img whileHover={{ scale: 0.9 }} src={item.imgUrl} alt="" />
            <div className=" p-2 product_info">
              <h3 className="product_name">
                <Link to={`/shop/${item.id}`}>{item.productName}</Link>
              </h3>
              <span>{item.category}</span>
            </div>
            <div className="product_card_bottom d-flex align-items-center justify-content-between p-2">
              <span className="price">${item.price}</span>
              <motion.span whileTap={{ scale: 1.2 }} onClick={addToCart}>
                <i class="ri-add-line"></i>
              </motion.span>
            </div>
          </div>
        </div>
      </Col>
    </>
  );
}
