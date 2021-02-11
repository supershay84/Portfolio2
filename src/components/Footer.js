import React from 'react';
import { makeStyles } from  '@material-ui/core/styles';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles({
    root: {
        "& .MuiBottomNavigationAction-root" : {
            minWidth: 0,
            maxWidth: 250
        },
        "& .MuiSvgIcon-root": {
            fill: "tan",
            "&:hover": {
                fill: "tomato",
                fontSize: "1.8rem"
            }
        }
    }
})

const Footer = () => {
    const classes = useStyles();
    return (
        <BottomNavigation width="auto"
                          style={{
                              background: "#222"
                          }}
        >
            <BottomNavigationAction style={{padding: 0}}
                                    icon={<FacebookIcon/>}
                                    className={classes.root}
            />

            <BottomNavigationAction style={{padding: 0}}
                                    icon={<InstagramIcon/>}
                                    className={classes.root}
            />

            <BottomNavigationAction style={{padding: 0}}
                                    icon={<LinkedInIcon/>}
                                    className={classes.root}
            />

            <BottomNavigationAction style={{padding: 0}}
                                    icon={<GitHubIcon/>}
                                    className={classes.root}
            />

        </BottomNavigation>
    )
}

export default Footer;
