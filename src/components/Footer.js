import React from 'react';
import { makeStyles } from  '@material-ui/core/styles';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
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
                                    icon={<MailOutlineIcon onClick={e => window.location.href="mailto:theaharris84@gmail.com"}/>}
                                    className={classes.root}
            />

            <BottomNavigationAction style={{padding: 0}}
                                    icon={<InstagramIcon onClick={e => window.location.href="https://www.instagram.com/brown_potatoes/"}/>}
                                    className={classes.root}
            />

            <BottomNavigationAction style={{padding: 0}}
                                    icon={<LinkedInIcon onClick={e => window.location.href="https://www.linkedin.com/in/thea-harris-2b5056200/"}/>}
                                    className={classes.root}
            />

            <BottomNavigationAction style={{padding: 0}}
                                    icon={<GitHubIcon onClick={e => window.location.href="https://github.com/supershay84"}/>}
                                    className={classes.root}
            />

        </BottomNavigation>
    )
}

export default Footer;
