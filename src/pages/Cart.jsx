import React from "react";
import "../styles/cart.css";
import Helmet from "../components/Helmet/Helmet";
import CommoSection from "../components/UI/CommoSection";
import { Col, Container, Row } from "reactstrap";

import { motion } from "framer-motion";
import { cartActions } from "../redux/slice/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount =useSelector(state => state.cart.totalAmount)
  return (
    <Helmet>
      <CommoSection title="shopping cart"></CommoSection>
      <section className=" py-5">
        <Container>
          <Row>
            <Col lg="9">
              {cartItems.length === 0 ? (
                <h2 className=" text-center ">No items added to the cart</h2>
              ) : (
                <table className=" table bordered">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Title</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item, index) => (
                      <Tr item={item} key={index} />
                    ))}
                  </tbody>
                </table>
              )}
            </Col>
            <Col lg="3">
              <div>
                <h6 className=" d-flex align-items-center justify-content-between">SubTotal  <span className=" fw-bold fs-5 ">${totalAmount}</span></h6>
               
                <p className=" m-2">taxes and shipping will calculate in checkout</p>
                <div>
                  <button className="buy_btn my-4"><Link to="/shop">Continue Shopping</Link></button>
                  <button className="buy_btn "><Link to="/checkout">Checkout</Link></button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

const Tr = ({ item }) => {
  const dispatch = useDispatch();
  const deleteProduct = () => {
    dispatch(cartActions.deleteItems(item.id));
  };
  return (
    <tr>
      <td>
        <img src={item.imgUrl} alt="" />
      </td>
      <td>{item.productName}</td>
      <td className=" fw-semibold">${item.price}</td>
      <td>{item.quantity}</td>
      <td>
        <motion.i
          whileTap={{ scale: 1.2 }}
          onClick={deleteProduct}
          class="ri-delete-bin-7-fill text-danger fs-5"
        ></motion.i>
      </td>
    </tr>
  );
};
export default Cart;
