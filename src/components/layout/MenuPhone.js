import React from 'react';
import { IconButton, Typography, Toolbar } from '@material-ui/core'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import MenuIncon from '@material-ui/icons/Menu'

const useStyles = makeStyles((theme) => ({
    MenuPhoneShow: {
        [theme.breakpoints.up('md')]: {
            display: 'none',

        },

    }
}));


export default function MenuPhone({ list }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const classes = useStyles();
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Toolbar className={classes.MenuPhoneShow} >
            <Typography
                component="h2"
                color="inherit"
                noWrap
            >ENG |&nbsp;</Typography>
            <img src={"/oculus.png"} style={{ width: 23, marginRight: 12, marginRight: 40 }} />
            <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                <MenuIncon />
            </IconButton>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {list.map((item, index) => (
                    <MenuItem key={index}>{item.title}</MenuItem>
                ))}
                <MenuItem style={{ color: "rgba(0, 112, 184, 0.6)", }}> ДИСТАНЦИОННОЕ ОБРАЗОВАНИЕ</MenuItem>
                <MenuItem>Образовательная платформа </MenuItem>
            </Menu>
        </Toolbar >
    );
}