import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import avatar from '../images/avatar.jpeg';
import { makeStyles } from '@material-ui/core/styles';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Footer from './Footer';
import { 
    AppBar,
    Toolbar,
    ListItem,
    IconButton,
    ListItemText,
    Avatar,
    Divider,
    Drawer,
    List,
    Typography,
    Box,
    ListItemIcon,
} from '@material-ui/core';
import {
    Home,
    Apps,
    ContactMail
} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    menuContainer: {
        width: '100%',
        background: '#511',
        height: '100%'
    },
    avatar: {
        display: 'block',
        margin: '1.5rem auto',
        width: theme.spacing(13),
        height: theme.spacing(13)
    },
    listItem: {
        color: 'tan',
        margin: '0.5rem auto'
    
    }
}));

const menuItems = [
    {
        listIcon: <Home/>,
        listText: "Home",
        listPath: "/"
    },
    {
        listIcon: <AccountCircleIcon/>,
        listText: "Resume",
        listPath: "/resume"
    },
    {
        listIcon: <Apps/>,
        listText: "Projects",
        listPath: "/projects"
    },
    {
        listIcon: <ContactMail/>,
        listText: "Contact",
        listPath: "/contact"
    }
];

const NavBar = () => {
    const[state, setState] = useState({
        right: false
    });

    const toggleSlider = (slider, open) => () => {
        setState({...state, [slider]: open})
    }
    const classes = useStyles()
    
    const sideList = (slider) => (
        <Box className={classes.menuContainer} 
             component="div"
             onClick={toggleSlider(slider, false)}
        >
            <Avatar className={classes.avatar} src={avatar} alt="Thea Harris"/>
            <Divider/>
            <List>
                {menuItems.map((lsItem, key) => (
                    <ListItem button key={key} component={Link} to={lsItem.listPath}>
                        <ListItemIcon className={classes.listItem}>
                            {lsItem.listIcon}
                        </ListItemIcon>
                        <ListItemText className={classes.listItem} primary={lsItem.listText}/>
                    </ListItem>
                ))}


                {/* <ListItem button>
                     <ListItemIcon className={classes.listItem}>
                        <Home/>
                    </ListItemIcon>
                    <ListItemText className={classes.listItem} primary="Home"/>
                </ListItem>   

                 <ListItem button>
                     <ListItemIcon className={classes.listItem}>
                        <AccountCircleIcon/>
                    </ListItemIcon>
                    <ListItemText className={classes.listItem} primary="Resume"/>
                </ListItem>  

                <ListItem button>
                     <ListItemIcon className={classes.listItem}>
                        <Apps/>
                    </ListItemIcon>
                    <ListItemText className={classes.listItem} primary="Projects"/>
                </ListItem> 

                <ListItem button>
                     <ListItemIcon className={classes.listItem}>
                        <ContactMail/>
                    </ListItemIcon>
                    <ListItemText className={classes.listItem}      primary="Contact"/>
                </ListItem>     */}
            </List>
        </Box>
    )
    return (
        <>
        <Box component="nav">
            <AppBar position="static" style={{background: "#222"}}>
                <Toolbar>
                    
                    <IconButton onClick={toggleSlider("right", true)}>
                        <MoreVertIcon style={{color: "tomato"}}/>
                    </IconButton>

                    <Typography variant="h5" style={{color: "tan"}}>
                        Portfolio
                    </Typography>
                    
                    <Drawer anchor="right"
                            open={state.right}
                            onClose={toggleSlider("right", false)}>
                        {sideList("right")}
                        <Footer/>
                    </Drawer>
                </Toolbar>
            </AppBar>
        </Box>
        </>
    )
}

export default NavBar
