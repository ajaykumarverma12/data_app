import React from 'react';
import { Router } from "react-router-dom"
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple } from '@material-ui/core/colors';

import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import AddShoppingCartOutlinedIcon from '@material-ui/icons/AddShoppingCartOutlined';
import { PLACE_HOLDER_IMAGE } from "../../lib/utils";
import { Location_Icon } from "../../lib/utils";
import { Login_Image } from "../../lib/utils";
import { Cart_Image } from "../../lib/utils";
import CartValue from '../../CartValue';
import Myaccount from '../../component/Myaccount';
import Login from '../../component/Login';



// import { isAuthenticated } from "../../services/auth";

function HamburgerMenu(props) {
    const classes = useStyles();

    return (

        <div className={classes.grow} >

            <AppBar position="static" style={{ background: '#FFFFFF', boxShadow: '0px 5px 20px #0000000D' }}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                        onClick={props.handleMenuOpen}
                    >
                        <MenuIcon style={{ fontSize: '20px', fontWeight: 'bold', color: '#000000' }} />
                    </IconButton>
                    <div >
                        <Typography variant="h6" noWrap >
                            <img src={PLACE_HOLDER_IMAGE} style={{ width: '50px', height: '50px', marginTop: '5px' }} />
                        </Typography>

                    </div>


                    <div>
                        <Typography variant="h6" noWrap style={{ marginLeft: '50px', color: '#000000', fontSize: '16px', marginTop: '8px',marginLeft:'15px' }}>
                            <img src={Location_Icon} />
                           Location
          </Typography>



                    </div>
                    <div className={classes.search} style={{ color: '#0F75BD', borderRadius: '8px 8px 8px 8px' }}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase style={{ fontSize: '14px', color: '#000000',fontFamily:'Nunito' }}
                            placeholder="Search for brand,product or more"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>

                    <div className={classes.grow} />

                    <div className={classes.sectionDesktop}>
                        <IconButton aria-label="show 17 new notifications" color="inherit" onClick={() => props.setOpenCartDialog(true)}>
                            <Badge badgeContent={props.cartCount} color="secondary">
                                <Typography variant="h6" noWrap style={{}}>
                                    <img src={Cart_Image}  />
                                </Typography>
                                <Typography style={{ marginRight: '80px', fontSize: '16px', color: '#000000', marginTop: '8px',marginLeft:'25px' }}>
                                    <CartValue />
                                </Typography>
                            </Badge>
                        </IconButton>

                        <IconButton
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={props.menuId}
                            aria-haspopup="true"
                            onClick={props.handleProfileMenuOpen}
                            color="inherit"
                        >

                            {/* {isAuthenticated() ? <Avatar className={classes.purple}>{isAuthenticated().user.name[0]} </Avatar> }: */}

                            <Typography variant="h6" noWrap>
                                <img src={Login_Image} />
                            </Typography>
                            <Typography style={{ marginRight: '80px', fontSize: '16px', color: '#000000', marginTop: '8px',marginLeft:'25px' }}>
                                <Login />

                            </Typography>

                        </IconButton>

                    </div>

                </Toolbar>
            </AppBar>
            {props.children}
        </div>
    );

}
const useStyles = makeStyles((theme) => ({
    width150: {
        width: 500,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.down('md')]: {
            marginRight: theme.spacing(0),
        },
    },
    title: {
        display: 'block',
        [theme.breakpoints.up('md')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: theme.spacing(2),
        width: 'auto',
        [theme.breakpoints.down('md')]: {
            marginRight: 0,
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 80),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '70ch',
        },
    },
    sectionDesktop: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    purple: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],
    },
    orange: {
        color: theme.palette.getContrastText(deepOrange[500]),
        backgroundColor: deepOrange[500],
    },
}));

export default HamburgerMenu;