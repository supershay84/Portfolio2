import React from 'react';
import NavBar from './NavBar';
import Header from './Header';
import Particles from 'react-particles-js';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    particlesCanvas: {
        position: "absolute",
        opacity: "0.4"
    }
})

const Home = () => {
    const classes = useStyles();
    return (
        <>
        <NavBar/>
        <Header/>
            <Particles
            canvasClassName={classes.particlesCanvas}
                params={{
                    particles: {
                        number: {
                            value:100
                        },
                        line_linked: {
                            shadow: {
                                enable: true,
                                color: "#3CA9D1",
                                blur: 5
                            }
                        },
                        shape: { 
                            type: "star",
                            size: {
                                value: 8,
                                random: true,
                                anim: {
                                    enable: true,
                                    speed: 6,
                                    synce: true
                                }
                            }
                        }
                    }
                }}           
            />
        </>
    )
}

export default Home
