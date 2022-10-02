import React from 'react'
import { Col } from 'reactstrap';
import chairImg from '../../assets/images/arm-chair-01.jpg';
import '../../styles/product-card.css'
export default function ProductCard() {
  return (
   <>
  <Col lg="3" md="4">
  <div className="product_item">
    <div className="product_img">
        <img src={chairImg} alt="" />
        <h3>Modern Armchair</h3>
        <span>Chair</span>
        <div className="product_card_bottom">
            <span className='price'>$299</span>
            <span><i class="ri-add-line"></i></span>
        </div>
    </div>
   </div>
  </Col>
   </>
  )
}
