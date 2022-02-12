import React from 'react';
import classes from './Banner.module.scss';

export const Banner = (props) => {
    return (
        <div className={classes.banner}>
            {props.title}
        </div>
    )
}