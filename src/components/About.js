import React from 'react'
import NavBar from './NavBar';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Typography, 
         Box,
         Button,
         Grid,
         TextField } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles((theme) => ({
    form: {
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        position: "absolute"
    },
    button: {
        marginTop: "1rem",
        color: "tomato",
        borderColor: "tomato"
    }
}))

const InputField = withStyles({
    root: {
        "& label.Mui-focused": {
            color: "tomato",
        },
        "& label": {
            color: "tan"
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: "tan"
            },
            "&:hover fieldset": {
                borderColor: "tan"
            },
            "& .Mui-focused fieldset": {
                borderColor: "tan",
            }
        }
    },
})(TextField);


const About = () => {
    const classes = useStyles();
    return (
        <Box component="div">
            <NavBar/>
            <h1>COMING SOON</h1>
            {/* <Grid container justify="center">
                <Box component="form" className={classes.form}>
                    <Typography variant="h5"
                                style={{
                                    color: "tomato",
                                    textAlign: "center",
                                    textTransform: "uppercase"
                                }}
                    >
                        Contact me...
                    </Typography>

                    <InputField fullWidth={true}
                                label="Name"
                                variant="outlined"
                                margin="dense"
                                size="medium"
                                inputProps={{ style: { color: "white" }}}
                    />
                    <br/>

                    <InputField fullWidth={true}
                                label="Email"
                                variant="outlined"
                                margin="dense"
                                size="medium"
                                inputProps={{ style: { color: "white" }}}
                    />
                    <br/>

                    <InputField fullWidth={true}
                                label="Company Name"
                                variant="outlined"
                                margin="dense"
                                size="medium"
                                inputProps={{ style: { color: "white" }}}
                    />
                    <br/>
                    <Button variant="outlined" 
                            fullWidth={ true } 
                            endIcon={<SendIcon/>}
                            className={classes.button}
                    >
                    <a href="mailto:theaharris84@gmail.com">
                        Contact Me
                    </a>
                    </Button>
                </Box>
            </Grid> */}
        </Box>
    )
}

export default About;