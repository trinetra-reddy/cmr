import React from 'react';
import classes from './Footer.module.scss';
import { NavLink } from "react-router-dom";
export const Footer = () => {
    return (
        <div className={classes.footer}>
            <div className="container">
                <div className="row m-0">
                    <div className="col-xs-12 col-sm-4">
                        <h5>About</h5>
                        <p className="px-1">CMR Achievers Solutions is a digital transformation IT training & consulting services company.</p>
                    </div>
                    <div className="col-xs-12 col-sm-4">
                        <h5>Services</h5>
                        <ul>
                            <li>
                                <NavLink to="/">IT-Training</NavLink>
                            </li>
                            <li>
                                <NavLink to="/">Placement Assistance</NavLink>
                            </li>
                            <li>
                                <NavLink to="/">Internship Programs</NavLink>
                            </li>
                            <li>
                                <NavLink to="/">Technology Consulting</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="col-xs-12 col-sm-4">
                        <h5>Quick Links</h5>
                        <ul>
                            <li>
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about">About</NavLink>
                            </li>
                            <li>
                                <NavLink to="/services">Services</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact">Contact Us</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={`row m-0 justify-content-center text-center ${classes['footer__copy-text']}`}>
                © 2022 —CMR Achievers Solutions. All Rights Reserved. Designed and Developed CMR's team
            </div>
        </div>
    )
}