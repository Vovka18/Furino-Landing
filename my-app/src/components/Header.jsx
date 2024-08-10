import React from "react";
import "../styles/header.sass";
import Logo from "../img/icon/Funiro.svg";
// import MenuLine from '../img/icon/menu-line.svg';
// import Heart from '../img/icon/Heart.svg';
// import Cart from '../img/icon/Cart.svg';
import Search from "../img/icon/InputSearch.svg";
import Avatar from "../img/icon/Avatar.png";

import Slider from "./slider/Slider";

const Header = () => {
  return (
    <header>
      <nav>
        <div className="user-navigation">
          <img src={Logo} alt="logo" />
          <ul>
            <li>
              <span>Products</span>
              <svg
                width="14"
                height="9"
                viewBox="0 0 14 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.8335 1.5L7.00016 7.33333L1.16683 1.5"
                  stroke="#3A3A3A"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <ul className="sub-menu-products">
                <li>
                  <a href="">All Products</a>
                </li>
                <li>
                  <a href="">New arrivals</a>
                </li>
                <li>
                  <a href="">Sale</a>
                </li>
              </ul>
            </li>
            <li>
              <span>Rooms</span>
              <svg
                width="14"
                height="9"
                viewBox="0 0 14 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.8335 1.5L7.00016 7.33333L1.16683 1.5"
                  stroke="#3A3A3A"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <ul className="sub-menu-rooms">
                <li>
                  <a href="">All Rooms</a>
                </li>
                <li>
                  <a href="">Bedroom</a>
                </li>
                <li>
                  <a href="">Living room</a>
                </li>
                <li>
                  <a href="">Dining room</a>
                </li>
              </ul>
            </li>
            <li>Inspirations</li>
          </ul>
          <div className="input">
            <button>
              <img src={Search} alt="Search" />
            </button>
            <input type="text" placeholder="Search for minimalist chair" />
          </div>
        </div>
        <div className="user-panel">
          <svg
            className="Heart"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.9997 21.054C-7.99987 9.99991 6.00011 -2.00009 11.9997 5.58797C18.0001 -2.00009 32.0001 9.99991 11.9997 21.054Z"
              stroke="#262F56"
              stroke-width="1.8"
            />
          </svg>
          <svg
            className="Cart"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 2.5H2.65424C3.13263 2.5 3.37183 2.5 3.56628 2.58674C3.73771 2.66321 3.88415 2.78638 3.98886 2.94217C4.10763 3.11888 4.14862 3.35454 4.23058 3.82585L4.6087 6M4.6087 6L5.49173 11.0774C5.67091 12.1077 5.7605 12.6228 6.02583 12.9939C6.25945 13.3207 6.58606 13.5695 6.96311 13.708C7.39133 13.8654 7.91176 13.815 8.95264 13.7143L18.614 12.7793C19.6298 12.681 20.1378 12.6318 20.5221 12.4033C20.8653 12.1993 21.1395 11.8972 21.3095 11.536C21.5 11.1314 21.5 10.6211 21.5 9.6005V9.6005C21.5 8.51582 21.5 7.97348 21.2922 7.55394C21.1068 7.17971 20.809 6.8729 20.4404 6.67654C20.0272 6.4564 19.4851 6.44036 18.4009 6.40826L4.6087 6Z"
              stroke="#262F56"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <circle
              cx="8.5"
              cy="19"
              r="2"
              stroke="#262F56"
              stroke-width="1.8"
            />
            <circle cx="18" cy="19" r="2" stroke="#262F56" stroke-width="1.8" />
          </svg>
          <div className="avatar">
            <img src={Avatar} alt="" />
          </div>
        </div>
      </nav>

      <div className="header-content">
        <div className="slider">
          <Slider />
        </div>
        <div className="info-block">
          <h1>High-Quality Furniture Just For You</h1>
          <p>
            Our furniture is made from selected and best quality materials that
            are suitable for your dream home
          </p>
          <button>Shop Now</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
