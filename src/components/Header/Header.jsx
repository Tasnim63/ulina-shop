import React from "react";
import { Container,Row } from "reactstrap";
import "./Header.css";
import navLogo from "../../assets/images/ulina-logo.png";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
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
  return (
    <header className="header">
      <Container>
        <Row>
          <div className="nav_wrapper">
            <div className="logo">
              <motion.img whileTap={{scale: 1.2}}  src={navLogo} alt="" />
            </div>
            <div className="navigation">
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
              <span className="cart_icons">
                <i class="ri-shopping-bag-fill"></i>
                <span className="badge">1</span>
              </span>
              <span>
                <i class="ri-user-3-fill user_icons"></i>
              </span>
            </div>
            <div className="mobile_menu ">
              <span>
                <i class="ri-menu-2-line"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
}
