import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Container, Row } from "reactstrap";
import navLogo from "../../assets/images/ulina-logo.png";
import "./Header.css";
const nav_links = [
  {
    path: "home",
    display: "Home",
  },
  {
    path: "shop",
    display: "Shop",
  },
  {
    path: "cart",
    display: "Cart",
  }
];
export default function Header() {
  const headerRef =useRef(null);
  const totalQuantity=useSelector(state => state.cart.totalQuantity)
  const menuRef =useRef(null)
  const navigate=useNavigate()
  const  stickyHeaderFunc=()=>{
    window.addEventListener('scroll',() =>{
      if(document.body.scrollTop > 80 ||  document.documentElement.scrollTop > 80 ){
        headerRef.current.classList.add('sticky_header')
      }else{
        headerRef.current.classList.remove('sticky_header')
      }
    })
  }
  useEffect(()=>{
   stickyHeaderFunc()
   return () => window.removeEventListener('scroll',stickyHeaderFunc)
  },[])

  const menuToggle =()=> menuRef.current.classList.toggle("nav_active");
  const navigateToCart =()=>{
navigate('/cart')
  }
  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav_wrapper">
            <div className="logo">
              <motion.img whileTap={{scale: 1.2}}  src={navLogo} alt="" />
            </div>
            <div className="navigation" ref={menuRef} onClick={menuToggle}>
              <ul className="menu">
                {nav_links.map((item, index) => (
                  <li className="nav_item" key={index}>
                    <NavLink
                      to={item.path}
                   className={(navClass) => navClass.isActive ? "nav_active" : ""}
                    >
                      {item.display}
                    </NavLink>{" "}
                  </li>

                ))}

       
              </ul>
            </div>
            <div className="nav_icons">
              <span className="fav_icons">
                <i class="ri-heart-3-fill"></i>
                <span className="badge">1</span>
              </span>
              <span className="cart_icons" onClick={navigateToCart}>
                <i class="ri-shopping-bag-fill"></i>
                <span className="badge">{totalQuantity}</span>
              </span>
              <span className="navig_login">
              <Link to="/login">  <i class="ri-user-3-fill user_icons"></i></Link>
              </span>
              <div className="mobile_menu ">
              <span onClick={menuToggle}>
                <i class="ri-menu-2-line"></i>
              </span>
            </div>
            </div>
            
          </div>
        </Row>
      </Container>
    </header>
  );
}
