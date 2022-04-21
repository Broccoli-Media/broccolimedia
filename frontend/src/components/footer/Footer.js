import React, { useState } from 'react'
import "./Footer.css"
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";

export default function Footer() {

    const [showMenu, setShowMenu] = useState(false);

    return (
        <footer>
            <div class="container">
                <div class="col">
                    <a href='/'><div class="logo-img"/></a>
                    <br/>
                </div>
            </div>
            <div className="container d-flex flex-wrap">
                <div class="col-12 col-md-12 col-lg-5">
                    <br/>
                    <div class="footer-section" >
                        <h5 class="header">Reach Us</h5>
                        <div class="py-1 ">
                            Melbourne University Taiwanese Student Association
                        </div>
                        <div class="py-1 ">
                            <a className="links" href="mailto:melbunitpa@gmail.com">
                                melbunitpa@gmail.com
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-12 col-lg-3 sitemap">
                    <br/>
                    <div class="footer-section">
                        <h5 class="header">Sitemap</h5>
                        <div class="d-flex footer-nav">
                            <h6 class="nav-item links">
                                <Link to="/">Home</Link>
                            </h6>
                            <h6 class="nav-item links">
                                <Link to="/about">About Us</Link>
                            </h6>
                            <h6 class="nav-item links">
                                <Link to="/contact">Contacts</Link>
                            </h6>
                            <h6 class="nav-item links">
                                <Link to="#">Secondhand</Link>
                            </h6>
                            <h6 class="nav-item links">
                                <Link to="#">SubjectReview</Link>
                            </h6>
                            <h6 class="nav-item links">
                                <Link data-toggle="nav-item" to onClick={() => setShowMenu(!showMenu)} >Extended</Link>
                                {showMenu && (
                                        // style={{ "background-color": "#E6B85C", "border-radius": "25px", "list-style-type": "none"}}
                                <ul class="justify-content-around" style={{"list-style-type": "none"}}>
                                    {/* <Link to onClick={() => setShowMenu(!showMenu)} >Close</Link> */}
                                    <li class="nav-link-items mb-1"><Link to="#">Accomodation</Link></li>
                                    <li class="nav-link-items mb-1"><Link to="#">Internet</Link></li>
                                    <li class="nav-link-items mb-1"><Link to="#">Restaurant</Link></li>
                                    <li class="nav-link-items mb-1"><Link to="#">Transport</Link></li>
                                </ul>)}
                            </h6>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-12 col-lg-3">
                    <br/>
                    <div class="footer-section">
                        <h5 class="header">Connect with Us</h5>
                        <br/>
                        <div class="d-flex justify-content-around">
                            <a href="https://www.facebook.com/groups/MUTPA">
                                <div class="social-logo" style={{"filter": "brightness(45%)"}}>
                                    <img src="https://i.imgur.com/u2OsQk4.png" alt="facebook logo" width="100%"/>
                                </div>
                            </a>

                            <a href="https://www.instagram.com/mutpa_2018/">
                                <div class="social-logo" style={{"filter": "brightness(45%)"}}>
                                    <img src="https://i.imgur.com/6SvB5X1.png" alt="instagram logo" width="100%"/>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container text-center">
                <br/>
                <hr class="bg-white"/>
                <br/>
                <p style={{"font-size": "small"}}>Copyright &copy; Melbourne University Taiwanese Student Association {(new Date().getFullYear())}</p>
            </div>
        </footer>
    )
}
