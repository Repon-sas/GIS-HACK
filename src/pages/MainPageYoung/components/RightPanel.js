import React, { useEffect, useState } from 'react'
import Card from '../../../components/Card'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Box, TabScrollButton, IconButton, } from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
import SwipeableViews from 'react-swipeable-views';
import Image1 from '../../../Routes/Buora.png';
import Image2 from '../../../Routes/Deer.png';
import Image3 from '../../../Routes/Dombah.png';
import Image4 from '../../../Routes/Hobbol.png';
import Image5 from '../../../Routes/Sakha.png';
import Image6 from '../../../Routes/Ozero.png';
import Card2 from '../../../components/Card2';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: 500,
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        height: 800,
        [theme.breakpoints.down('md')]: {
            height: 600,
        },
        [theme.breakpoints.down('sm')]: {
            overflowY: 'visible',
        },
        '&::-webkit-scrollbar': {
            width: '0.4em'
        },
        '&::-webkit-scrollbar-track': {
            '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(0,0,0,.1)',
            outline: '1px solid slategrey'
        },
    },
    TextStyle: {
        color: 'rgba(255, 255, 255, 0.6)',
        marginLeft: 10,
        fontSize: 16
    },
    Backround: {
        backgroundColor: '#252525',
        color: '#fff',
        marginTop: 15
    }
}));
const RightPanel = ({ data, setCoords, over, height, routesList, setIndexArray, }) => {

    const classes = useStyles()
    const [value, setValue] = React.useState(0);
    const theme = useTheme();
    const sendCoords = (value) => {
        setCoords(value)
    };
    const handleChange = (event, newValue) => {
        setValue(newValue)

        if (value === 0) {
            setIndexArray(true)
        } else {
            setIndexArray(false)
        }
        // console.log('asdasdads', value)
    };
    const handleChangeIndex = (index) => {
        setValue(index);
    };

    const updateCoords = (value) => {
        // console.log('value: ', value)
    }

    const Text1 =
        [
            {
                id: '1',
                index: '1',
                coords: [67.737730, 129.245602],
                title: 'Горы Эвено-быт района',
                image: Image1,
                text: 'Суровые горы, для суровых людей',
            },
            {
                id: '2',
                index: '2',
                coords: [67.675215, 128.157956],
                title: 'Сакырыр',
                image: Image2,
                text: 'Сакнырыр - посещайсе там и тд',
            },
            {
                id: '3',
                index: '2',
                coords: '2',
                title: 'Оленеводы',
                image: Image3,
                text: 'Лагерь оленеводов',
            },
            {
                id: '5',
                index: '2',
                coords: '2',
                title: 'Высокие горы',
                image: Image5,
                text: 'Суровые горы, для суровых людей',
            }
        ]
        

        const Text5 =
        [
            {
                id: '1',
                index: '1',
                coords: [67.737730, 129.245602],
                title: 'Путь вдоль горы',
                image: Image4,
                text: 'Маршрут до конебазы',
            },
            {
                id: '2',
                index: '2',
                coords: [67.675215, 128.157956],
                title: 'Путь до озера Буора',
                image: Image6,
                text: 'Маршрут до села Чинендьэ',
            },
        ]

    return (
        <div>
            <Box style={{ marginTop: 20, marginLeft: 20 }}>
                {/* <Typography variant="h8" className={classes.TextStyle}>Фильтры поиска:</Typography> */}
                <Paper square className={classes.Backround}>
                    <Tabs
                        value={value}
                        indicatorColor="primary"
                        onChange={handleChange}
                    >
                        <Tab label="Достопримечательности" />
                        <Tab label="Маршруты" />
                    </Tabs>
                </Paper>
                {/* <Box>
                    <Box style={{ marginTop: 20, marginBottom: 10 }}>
                        <Typography variant="h6" className={classes.TextStyle}>Результат:</Typography>
                    </Box>
                </Box> */}
            </Box>

            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <div className={classes.container} style={{ overflowY: `${over}`, height: `${height}` }}>
                    <TabPanel value={value} index={0} dir={theme.direction}>
                        <Grid
                            wrap='wrap'
                            container
                        >
                            {Text1.map((item, index) => (
                                <Grid item key={index} lg={4} sm={4} md={6} xl={4} xs={12} >
                                    
                                    <Card2 coords={item.coords} title={item.title} img={item.image} text={item.text} sendCoords={sendCoords} id={item.id} />
                                </Grid>
                            ))}
                        </Grid>
                    </TabPanel>
                </div>
                <div className={classes.container} style={{ overflowY: `${over}`, height: `${height}` }}>
                    <TabPanel value={value} index={1} dir={theme.direction}>
                        <Grid
                            wrap='wrap'
                            container
                        >
                            {Text5.map((item, index) => {
                                console.log(item)
                                return (
                                <Grid item key={index} lg={4} sm={4} md={6} xl={4} xs={12} >
                                    <Card sendRouteCoords={updateCoords} coords={item.coords} sendCoords={sendCoords} title={item.title} img={item.image} text={item.text} id={item.id} />
                                </Grid>
                                )
                            })}
                        </Grid>
                    </TabPanel>
                </div>
            </SwipeableViews>
        </div>
    )

}

export default RightPanel