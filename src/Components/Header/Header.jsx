import React, { useState } from 'react';
import logo from "../../Images/logo.png";
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { menuTitleArr } from '../../Config';
import './header.css'
// import { androidUrl, iosUrl, menuTitleArr, pushMenu } from '../../Config';
// import DateClock from '../DateClock';

export default function Header() {

  const clientData = useSelector((state) => state.clientDetails);
  const [toggleMenu, setToggleMenu] = useState(true);
  const [toggleMenuFirstTime, setToggleMenuFirstTime] = useState(true);
  let location = useLocation().pathname;
  let currentPathName = location?.split('/')?.length > 1 ? location?.split('/')[1] : location?.split('/')[0];

  return (
    <header>
      <div className="header-top-marquee">
        <div className="container-fluid">
          <marquee className="marquee1" >{clientData[0]?.marqueeTop}</marquee>
        </div>
      </div>
      <div className="header-top-details">
        <div className="container-fluid">
          <div className="second-part-cover">
            <div className="row">
              <div className="col-lg-12 align-self-center">
                <div className="header-cover">
                  <div className="logo-cover">
                    <Link to="/">
                      <img src={logo} alt="" />
                    </Link>
                  </div>
                  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container">
                      <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarsExample07"
                        aria-controls="navbarsExample07"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                      >
                        <span className="navbar-toggler-icon" />
                      </button>
                      <div
                        className="collapse navbar-collapse"
                        id="navbarsExample07"
                      >
                        <ul className="navbar-nav">

                          {!!menuTitleArr && menuTitleArr?.length > 0 && menuTitleArr.map((menu) => {
                            if (!menu?.display) return false;
                            return (
                              <li className={`nav-item  ${currentPathName === menu?.path ? "active" : ""}`} key={menu?.id}>
                                <Link className={`nav-link`} to={`/${menu?.path}`}>{menu.name}</Link>
                              </li>
                            );
                          }
                          )}

                        </ul>
                      </div>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

  );
}
