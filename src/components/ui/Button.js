import React, { Fragment } from 'react';
import classes from './Button.module.scss'

export const Button = (props) => {
    return (
        <Fragment>
            <button className={classes.btn}>
                {props.children}
            </button>
        </Fragment>
    )
}
