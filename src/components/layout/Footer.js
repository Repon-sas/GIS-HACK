import React, { useState, } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { Container, Grid, Paper } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    cont: {
        backgroundColor: '#171717',
        color: "white",
        paddingTop: 25,
        paddingBottom: 25,
    },
    item: {
        display: "flex",
        flexDirection: "column",
        justifyContent: 'start'
    },
    linkItem: {
        color: 'white'
    }
}));

function Copyright() {
    return (
        <Typography variant="body2" style={{ color: 'white' }} align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
        </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default function Footer(props) {
    const classes = useStyles()
    return (
        <div className={classes.cont}>
            <Container >
                <Typography variant="h6" align="center" gutterBottom>
                    Footer
        </Typography>
                <Typography variant="subtitle1" align="center" style={{ color: 'white' }} component="p">
                    Something here to give the footer a purpose!
        </Typography>
                <Copyright />
            </Container>
        </div>
    );
}

Footer.propTypes = {
    sections: PropTypes.array,
    title: PropTypes.string,
};