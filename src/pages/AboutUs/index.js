import React from 'react';
import { Banner } from '../../components/ui/Banner';
import { AboutUsContent } from "../../components/ui/AboutUsContent";
import classes from './About.module.scss';

export const AboutUs = () => {
    return (
        <div className={classes.about}>
            <Banner title="About Us"/>
            <div className={`container ${classes['about__content']}`}>
                <AboutUsContent/>
            </div>
                
        </div>
    )
}