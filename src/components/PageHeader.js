import * as React from 'react';
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { useGlobalClasses } from "./Global";
import { mainTheme } from "../styles";

import { ExtraLargeHeader } from "./ExtraLargeHeader";

const useStyles = makeStyles({
    container: {
        maxWidth: 800,
        margin: 'auto'
    },

    title: {
        fontWeight: 500,
        color: mainTheme.colors.darkBlue,
        textAlign: 'center',
        fontFamily: mainTheme.fontFamily.Roboto,
        fontSize: mainTheme.textSizes.extraLarge
    },

    description: {
        margin: '16px 0px',
        color: mainTheme.colors.lightPurple,
        textAlign: 'center'
    }
});

export const PageHeader = ({ name, title, description }) => {
    const classes = useStyles()
    const globalClasses = useGlobalClasses()

    return (
        <Box className={classes.container} pt={10} pb={10}>
            <Typography className={globalClasses.redTitle}>{name}</Typography>
            <ExtraLargeHeader>{title}</ExtraLargeHeader>
            <Typography className={`${globalClasses.regularText} ${classes.description}`}>{description}</Typography>
        </Box>
    );
};