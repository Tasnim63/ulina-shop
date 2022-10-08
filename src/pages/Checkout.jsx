import React from 'react'
import { Col, Container, Row } from 'reactstrap';
import Helmet from '../components/Helmet/Helmet';
import CommoSection from '../components/UI/CommoSection';
import '../styles/checkout.css';
import { useSelector } from 'react-redux';
export default function Checkout() {
  const  totalQty=useSelector(state => state.cart.totalQuantity);
  const totalAmount=useSelector(state => state.cart.totalAmount)
  return (
   <Helmet title="Checkout">
   <CommoSection/>
   <section className=' py-5'>
    <Container>
      <Row>
        <Col lg="8">
          <h6>Billing information</h6>
          <form className='billing_form'  >
            
            <formGroup className="form_group">
              <input className=' mt-2' type="text" placeholder='Enter your name'/>
            </formGroup>
            <formGroup className="form_group">
              <input className=' mt-2' type="email" placeholder='Enter your email'/>
            </formGroup>
            <formGroup className="form_group">
              <input className=' mt-2' type="number" placeholder='Phone  Number'/>
            </formGroup>
            <formGroup className="form_group">
              <input className=' mt-2' type="text" placeholder='Street Address'/>
            </formGroup>
            <formGroup className="form_group">
              <input className=' mt-2' type="text" placeholder='city'/>
            </formGroup>
            <formGroup className="form_group">
              <input className=' mt-2' type="text" placeholder='Postal code'/>
            </formGroup>
            <formGroup className="form_group">
              <input className=' mt-2' type="text" placeholder='country'/>
            </formGroup>
          </form>
        </Col>
        <Col lg="4">
          <div className="checkout_cart mt-4">
            <h6>Total Qty: <span>{totalQty}items</span></h6>
            <h6>Subtotal : <span>${totalAmount}</span></h6>
            <h6>Shipping :<br/>
         Free shipping
            <span>$0</span></h6>
         
            <h4>Total Cost: <span>${totalAmount}</span></h4>
            <button className=' buy_btn my-3 auth_btn w-100'>Place an order</button>
          </div>
         
        </Col>
      </Row>
    </Container>
   </section>
   </Helmet>
  )
}
