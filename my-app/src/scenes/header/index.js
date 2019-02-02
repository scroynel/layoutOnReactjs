import React, { Component } from 'react';
import "./header.css";

const Header = () => (
        <div className="headerBlock">


          <div className="headerBlockMenu">
            <div className="logoAndText">
              <div className="logo"></div>
              <div className="waxom"></div>
            </div>
            <nav>
              <ul>
                <li>
                  <a>
                    Home
                  </a>
                </li>
                <li>
                  <a>
                    About Us
                  </a>
                </li>
                <li>
                  <a>
                    Portfolio
                  </a>
                </li>
                <li>
                  <a>
                    Features
                  </a>
                </li>
                <li>
                  <a>
                    Blog
                  </a>
                </li>
                <li>
                  <a>
                    Pricing
                  </a>
                </li>
                <li>
                  <a>
                    Shortcodes
                  </a>
                </li>
                <li>
                  <a>
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
            <div className="twoIcons">
              <div className="cart"></div>
              <div className="search"></div>
            </div>
          </div>

          <div className="MainDivCenter">
            <div className="mainText">
              <p className="Text inMainText1">Unique and Modern Design</p>
              <p className="Text inMainText2">Portfolio PSD Template</p>
              <p className="Text inMainText3">Nam liber tempor cum soluta nobis eleifend
               option congue nihil imperdiet doming id quod
                mazim placerat facer possim assum.</p>
            </div>
            <div className="butGetStarted">
              <p className="textGetStarted">Get started</p>
            </div>
          </div>
            

        </div>
)

  export default Header;