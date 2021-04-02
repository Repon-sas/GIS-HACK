import React, { useContext } from 'react'
import { Box, TabScrollButton, IconButton, Grid } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Context } from '../../../context/index';


const SideBar = ({ title, text, img, setVideo }) => {
    const { leverFalse } = useContext(Context)

    const showVideo = () => {
        setVideo(true)
    }
    return (
        <div>
            <div style={{ marginLeft: 10 }}>
                <IconButton>
                    <ArrowBackIcon className="btn" onClick={() => {
                        leverFalse()
                    }} />
                </IconButton>
            </div>

            <div class="place-single">
                <Grid item lg={9} sm={12} md={9} xl={9} xs={12}>
                    <img src={img} style={{ width: '100%' }} />
                </Grid>
                <p class="place-single__title">{title}</p>
                <p>{text}</p>

                <p>
                    <button className="btn" onClick={showVideo}>Посмотреть видео</button>
                </p>
            </div>

        </div>
    )
}

export default SideBar