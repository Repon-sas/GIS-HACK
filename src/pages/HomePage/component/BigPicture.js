import React from 'react'
import { Box, Typography, Grid, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom'


const useStyles = makeStyles(() => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: `url(${"/Fon.png"})`,
        width: '100%',
        height: 600,
        color: 'white'
    },
    btn: {
        color: 'black',
        background: '#00FFC2',
        borderRadius: 3,
        border: 0,
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    }
}));

const BigPicture = () => {
    const history = useHistory()
    const classes = useStyles()
    return (
        <Box className={classes.container}>
            <img src={'/logo1.png'} style={{ width: 300, height: 300, }} />
            <Grid item style={{ textAlign: 'center' }} lg={4} sm={6} md={4} xl={3} xs={12}>
                <Typography style={{ fontSize: 16 }} variant="h6">Место сосредочения национального самосозначния, самобытной культуры и гаранта этнического саморазвития...</Typography>
            </Grid>
            <Button variant="contained" className={classes.btn} onClick={() => {
                history.push('/maps')
            }}>
                Перейти на карты
</Button>
        </Box>
    )
}

export default BigPicture