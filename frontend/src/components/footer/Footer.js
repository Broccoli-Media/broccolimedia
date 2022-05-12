import React, { useState } from 'react'
import "./Footer.css"
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";

export default function Footer() {

    const [showMenu, setShowMenu] = useState(false);

    return (
        <footer>
            
            <div className="container d-flex flex-row justify-content-around">
                <div class="col-md-5 col-lg-4">
                    <div>
                        <a href='/'><img src='https://i.imgur.com/0nCscCD.png' alt='BROCCOLI MEDIA' width="50%" /></a>
                    </div>
                </div>
                <div class="col-md-5 col-lg-4">
                    <br/>
                    <div class="footer-section" >
                        <h4 class="header">Reach Us</h4>
                        <div class="py-4">
                            <a className="links" href="mailto:broccolimedia@gmail.com">
                                broccolimedia@gmail.com
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-md-5 col-lg-4">
                    <br/>
                    <div class="footer-section">
                        <h5 class="header">Connect with Us</h5>
                        <br/>
                        <div class="d-flex justify-content-around">
                            <a href="/">
                                <div class="social-logo">
                                    <img src="https://i.imgur.com/u2OsQk4.png" alt="facebook logo" width="100%"/>
                                </div>
                            </a>

                            <a href="/">
                                <div class="social-logo">
                                    <img src="https://i.imgur.com/6SvB5X1.png" alt="instagram logo" width="100%"/>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div> 
            <div class="container text-center">
                <hr class="bg-white"/>
                <p style={{"font-size": "small"}}>Copyright &copy; BROCCOLI MEDIA {(new Date().getFullYear())}</p>
            </div>
        </footer>
    )
}
