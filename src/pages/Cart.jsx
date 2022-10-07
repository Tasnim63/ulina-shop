import React from "react";
import "../styles/cart.css";
import Helmet from "../components/Helmet/Helmet";
import CommoSection from "../components/UI/CommoSection";
import { Col, Container, Row } from "reactstrap";
import tdImg from '../assets/images/arm-chair-01.jpg' ;
import {motion} from 'framer-motion';
import {cartActions} from '../redux/slice/cartSlice';
import { useSelector, useDispatch } from "react-redux";
export default function Cart() {
  const cartItems =useSelector(state => state.cart.cartItems)
  return (
    <Helmet>
      <CommoSection title="shopping cart"></CommoSection>
      <section className=" py-5">
        <Container>
          <Row>
            <Col lg="9">
              {
                cartItems.length === 0 ? <h2 className=" text-center ">No items added to the cart</h2> : ( <table className=" table bordered">
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
                  <tr>
                    <td>
                      <img src={tdImg} alt="" />
                    </td>
                    <td>Modern Arm Chair</td>
                    <td>$299</td>
                    <td>2px</td>
                    <td><i class="ri-delete-bin-7-fill"></i></td>
                  </tr>
                </tbody>
              </table>)
              }
             
            </Col>
            <Col lg="3"></Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}
