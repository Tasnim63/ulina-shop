import React from "react";
import "../styles/cart.css";
import Helmet from "../components/Helmet/Helmet";
import CommoSection from "../components/UI/CommoSection";
import { Col, Container, Row } from "reactstrap";

import {motion} from 'framer-motion';
import {cartActions} from '../redux/slice/cartSlice';
import { useSelector, useDispatch } from "react-redux";


const Cart = () => {
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
                  <th >Delete</th>
                </tr>
              </thead>
              <tbody>
               {
                cartItems.map((item,index)=>(
                <Tr item={item} key={index}/>
                ))
               }
              </tbody>
            </table>)
            }
           
          </Col>
          <Col lg="3"></Col>
        </Row>
      </Container>
    </section>
  </Helmet>
  )
}


const Tr =({item})=>{
  return  <tr>
  <td>
    <img src={item.imgUrl} alt="" />
  </td>
  <td>{item.productName}</td>
  <td>${item.price}</td>
  <td>{item.quantity}</td>
  <td><motion.i whileTap={{scale:1.2}} class="ri-delete-bin-7-fill"></motion.i></td>
</tr>
}
export default Cart