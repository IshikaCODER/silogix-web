import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Navbar.css';
import logo from '../../assets/images/logo.png';

const Navbar = () => {
    
    const [isOpen, setIsOpen] = useState(false);
    const [isServiceOpen, setIsServiceOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleServiceMenu = () => {
        setIsServiceOpen(!isServiceOpen);
      };

    return (
        <>
            {/* <!-- Header-start --> */}
            <header className="header-area">
                <div className="custom-container">
                    <div className="custom-row align-items-center justify-content-between">
                        <div className="header-left d-flex align-items-center">
                            {/* <!-- header-logo-start --> */}
                            <Link to="/" className="logo">
                                <img src={logo} id="logo" alt="" />Silogix
                            </Link>
                            <div className="header-left-right">
                                {/* <Link to="/contact" className="theme-btn">Contact Us</Link> */}
                                <span className="menu-bar" onClick={toggleMenu}>
                                    <i className="fa-solid fa-bars"></i>
                                </span>
                            </div>
                            {/* <!-- header-logo-end --> */}
                            {/* <!-- navbar-start --> */}
                            <nav className={`navbar-wrapper ${isOpen ? 'open' : ''}`}>
                                <span className="close-menu-bar"  onClick={toggleMenu}>
                                    <i className="fa-solid fa-xmark"></i>
                                </span>
                                <ul>
                                    <li className="mega-menu-item">
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li className="mega-menu-item">
                                        <Link to="/company">Company</Link>
                                    </li>
                                    <li className="dropdown-menu-item"  onClick={toggleServiceMenu}>
                                        <Link to="/service">Services</Link>
                                        <span className="dropdown-menu-item-icon" onClick={toggleServiceMenu}>
                                            <i className="fa-solid fa-caret-down"></i>
                                        </span>
                                        <ul className={`dropdown-menu ${isServiceOpen ? 'open' : ''}`}>
                                            <li>
                                                <Link to="/service">Memory Compiler Design</Link>
                                            </li>
                                            <li>
                                                <Link to="/service">Std. Cell Design</Link>
                                            </li>
                                            <li>
                                                <Link to="/service">IO Lib. Design</Link>
                                            </li>
                                            <li>
                                                <Link to="/service">Custom Layout Design</Link>
                                            </li>
                                            <li>
                                                <Link to="/service">EDA Automation</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="mega-menu-item">
                                        <Link to="/career">Career</Link>
                                    </li>
                                    <li className="mega-menu-item">
                                        <Link to="/blog">Blog</Link>
                                    </li>
                                </ul>
                            </nav>
                            {/* <!-- navbar-end --> */}
                        </div>
                        {/* <!-- header-contact-start --> */}
                        <div className="header-right">
                            <div className="header-contact-info d-flex align-items-center">
                                <div className="phone-number">
                                    <Link to="tel:+91 8040998499">
                                        Call Us
                                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                    </Link>
                                    +91 8040998499
                                </div>
                                <Link to="/contact" className="theme-btn">Contact Us</Link>
                            </div>
                        </div>
                        {/* <!-- header-contact-end --> */}
                    </div>
                </div>
            </header>
            {/* <!-- Header-end --> */}
        </>
    )
}

export default Navbar;

