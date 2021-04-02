import * as React from 'react';

import { makeStyles } from "@material-ui/styles";
import { mainTheme } from "../styles";
import { Box } from "@material-ui/core";

const useClasses = makeStyles({
    button: {
        display: 'block',
        backgroundColor: '#00FFC2',
        fontFamily: mainTheme.fontFamily.Roboto,
        fontSize: mainTheme.textSizes.small,
        color: 'black',
        padding: '13px 15px',
        margin: '40px auto',
        border: 0,
        borderTopLeftRadius: 10,
        borderBottomRightRadius: 10,
        transition: 'all 0.3s ease',

        "&:focus": {
            outline: 'none'
        },

        "&:hover": {
            opacity: 0.8
        },
    }
})

export const Button = ({ text, onClick }) => {
    const classes = useClasses()
    return <button className={classes.button} onClick={onClick}>{text}</button>
};