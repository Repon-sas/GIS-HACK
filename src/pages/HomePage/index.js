import React, { useEffect, useContext, useState } from 'react'
import Layout from '../../components/layout/Layout'
import BigPicture from './component/BigPicture'
import SidePanel from '../MainPageYoung/components/RightPanel'
import { Context } from '../../context/index'
import { Box, Grid, } from '@material-ui/core'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom'


const useStyles = makeStyles(() => ({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#252525'
    },
    btn: {
        background: '#24ca13',
        borderRadius: 3,
        border: 0,
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    }
}));

const HomePage = () => {
    const classes = useStyles()
    const history = useHistory()
    // const { user } = useContext(Context);
    // useEffect(() => {
    //     console.log('we user', user)
    // }, [user])
    const [data, setData] = useState([])
    const [rout, setRout] = useState([])
    const [indexArray, setIndexArray] = useState(true)
    const leverTrue = () => {
        console.log('')
    }
    const click = () => {
        history.push('/maps')
    }

    useEffect(() => {
        axios.get('http://localhost:3000/posts').then(res => setData(res.data))
    }, [])
    useEffect(() => {
        axios.get('http://localhost:3000/route').then(res => setRout(res.data))
    }, [])
    return (
        <Context.Provider value={{ leverTrue }}>
            <Layout>
                <BigPicture />
                <Box className={classes.container}>
                    <Grid item lg={6} sm={8} md={8} xl={6} xs={9}>
                        <SidePanel data={data} over={'visible'} height={'100%'} click={click} routesList={rout} setIndexArray={setIndexArray} />
                    </Grid>
                </Box>
            </Layout>
        </Context.Provider>
    )
}

export default HomePage