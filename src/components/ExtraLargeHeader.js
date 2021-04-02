import * as React from 'react';
import { useEffect, useState } from "react";
import { mainTheme } from "../styles";
import { makeStyles, Typography } from "@material-ui/core";


export const ExtraLargeHeader = ({ children }) => {
    const [fontSize, setFontSize] = useState(mainTheme.textSizes.extraLarge)
    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 600) {
                setFontSize(mainTheme.textSizes.middle)
            } else {
                setFontSize(mainTheme.textSizes.extraLarge)
            }
        }
        handleResize()
        window.addEventListener('resize', handleResize)
    })

    const useClasses = makeStyles({
        text: {
            color: mainTheme.colors.darkBlue,
            textAlign: 'center',
            fontFamily: mainTheme.fontFamily.Roboto,
            fontSize: fontSize,
            fontWeight: 500,
            lineHeight: 1.08
        }
    })
    const classes = useClasses()
    return (
        <>
            <Typography className={classes.text}>{children}</Typography>
        </>
    );
};