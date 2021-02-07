import React from 'react';
import Typed from 'react-typed';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Avatar, Grid, Box } from '@material-ui/core';
import avatar from '../images/avatar.jpeg';

const useStyles = makeStyles((theme) => ({
    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin:theme.spacing(1)
    },
    title: {
        color: "tomato",
        fontFamily: 'Amatic SC', 
        fontFamily: 'Homemade Apple'
    },
    subtitle: {
        color: "tan",
        marginBottom: "3rem",
        fontFamily: 'Amatic SC', 
        fontSize: "3rem"
    },
    typedContainer: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100vw",
        textAlign: "center",
        zIndex: 1
    }
}));

const Header = () => {
    const classes = useStyles();
    return (
       <Box className={classes.typedContainer}>
          <Grid container justify="center">
            <Avatar src={avatar} 
                   alt="Thea Harris"
                   className={classes.avatar}
            />
           </Grid>
           
           <Typography variant="h4"
                       className={classes.title}
           >
            <Typed strings={["i am Thea"]}
                   typeSpeed={100}
            />
            </Typography>

            <Typography variant="h5"
                        className={classes.subtitle}
            >
            <Typed strings={["Fullstack Web Development", "MERN Stack",    "Web Design" ]}
                   typeSpeed={40}
                   backSpeed={50}
                   loop
            />
            </Typography>
       </Box>
    )
}

export default Header
