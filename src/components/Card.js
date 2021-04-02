import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Context } from '../context/index'

const useStyles = makeStyles({
    root: {
        maxWidth: 290,
        marginBottom: 20,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        borderBottomColor: 'blue',
        borderBottom: 2,
        backgroundColor: '#171717',
    },
    btn: {
        background: '#00FFC2',
        borderRadius: 3,
        border: 0,
        marginLeft: 10,
        marginBottom: 10,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    }
});

export default function ImgMediaCard({ img, text, coords, sendCoords, id, title, sendRouteCoords, isRoute }) {
    const { leverTrue } = useContext(Context)
    const classes = useStyles();
    console.log(img)

    const click = (id) => {
        leverTrue(id)

        if (coords && coords.length < 3) {
            sendCoords({
                coords,
                id
            })
        } else {
            sendRouteCoords({
                coords,
                id,
            })
        }
    }

    return (
        <Card className={classes.root}>
            <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="160"
                image={img}
                title="Contemplative Reptile"
            />
            <CardContent>
                <Typography variant="h6" color="textSecondary" component="p" style={{ color: 'black', marginTop: '-50px', marginBottom: 10 }}>
                    {title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" style={{ height: 55, textOverflow: 'ellipsis', overflow: 'hidden', color: 'white' }}>
                    {text}
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant="contained" className={classes.btn} onClick={() => {
                    click(id)
                }}>
                    Перейти
                    </Button>
            </CardActions>

        </Card>
    );
}