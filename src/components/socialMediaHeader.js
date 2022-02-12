import React, { useRef, useState } from "react";
import classes from "./socialMediaHeader.module.scss";

export const SocialMediaHeader = () => {
    return (
        <div className={`${classes['social-header']}`}>
            <ul className="d-flex">
                <li>
                    <a href="tel:+91 9000573185">
                        <span className="icon-phone"></span>
                        <span>+91 9000573185</span>
                    </a>
                </li>
                <li>
                    <a href="tel:08554 292079">
                        <span className="icon-phone-hang-up"></span>
                        <span>08554 292079</span>
                    </a>
                </li>
                <li>
                    <a href="tel:+91 9494530623">
                        <span className="icon-phone"></span>
                        <span>+91 9494530623</span>
                    </a>
                </li>
                <li>
                    <a href="mailto:cmrachieverssolotions@gmail.com?subject=Enquiring for" target="_blank">
                        <span className="icon-mail2"></span>
                        <span>cmrachieverssolotions@gmail.com</span>
                    </a>
                </li>
            </ul>
            <ul className={`d-flex ${classes['social-header__media']}`}>
                <li>
                    <a href="#">
                        <span className="icon-twitter"></span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className="icon-facebook"></span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className="icon-instagram"></span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className="icon-linkedin2"></span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className="icon-pinterest2"></span>
                    </a>
                </li>
            </ul>
        </div>
    )
}