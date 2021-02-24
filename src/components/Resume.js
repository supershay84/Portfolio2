import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';
import NavBar from './NavBar';

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        background: "#233"
    },
    resume: {
        fontSize:"12px",
        color:"tomato"
    },
    timeLine: {
        position: "relative",
        padding: "1rem",
        margin: "0 auto",
        "&:before": {
            content: "''",
            position: "absolute",
            height: "100%",
            border: "1px solid tan",
            right: "40px",
            top: 0
        },
        "&:after": {
            content: "''",
            display: "table",
            clear: "both"    
        },
        [theme.breakpoints.up("md")]:{
            padding: "2rem",
            "&:before": {
                left: "calc(50% - 1px)",
                right: "auto"
            }
        }
    },
    timeLineItem: {
        padding: "1rem",
        borderBottom: "2px solid tan",
        position: "relative",
        margin: " 1rem 3rem 1rem 1rem",
        clear: "both",
        "&:after": {
            content: "''",
            position:"absolute"  
        },
        "&:before": {
            content: "''",
            position:"absolute",
            right: "-0.625rem",
            top: "calc(50% - 5px)",
            borderStyle: "solid",
            borderColor: "tomato tomato transparent transparent",
            borderWidth: "0.625rem",
            transform: "rotate(45deg)"
        },
        [theme.breakpoints.up("md")]:{
            width: "44%",
            margin: "1rem",
            "&:nth-of-type(2n)": {
                float: "right",
                margin: "1rem",
                borderColor: 'tan'
            },
            "&:nth-of-type(2n):before": {
                right: "auto",
                left: "-0.625rem",
                borderColor: "tomato tomato transparent transparent",
            }
        }
    },
    timeLineYear: {
        textAlign: "center",
        maxWidth: "9.375rem",
        margin: " 0.3rem 0 auto",
        fontSize: "1.8rem",
        background: "tomato",
        color: "aliceblue",
        lineHeight: 1,
        padding: "0.5rem 0 1rem",
        "&:before": {
            display: "none"
        },
        [theme.breakpoints.up("md")]:{
            textAlign: "center",
            margin: "0 auto",
            "&:nth-of-type(2n)": {
                float: "none",
                margin: "0 auto",     
            },
            "&:nth-of-type(2n):before": {
                display: "none"
            }
        }
    },
    heading: {
        color: "tomato",
        padding: "3rem 0",
        textTransform: "uppercase"
    },
    subHeading: {
        color: "aliceblue",
        padding: "0",
        textTransform: "uppercase"
    }
}));

const Resume = () => {
    const classes = useStyles();
    let url = "https://docs.google.com/document/d/1D_v8aghupOOMVUgvG8_0y6NqDiTicySoHvn9TzeSrfA"
    return (
     <>
      <NavBar/>
      <Box component="header" className={classes.mainContainer}>
          <Typography variant="h4" align="center" className={classes.heading}>
              Experience
              <br/>
              <a className={classes.resume} href={url}>See Full Resume</a>
          </Typography>


          <Box component="div" className={classes.timeLine}>
              <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                 2021 
              </Typography>

              <Box component="div" className={classes.timeLineItem}>
                  <Typography variant="h5" 
                            //   align="center" 
                              className={classes.subHeading}
                  >
                      Fullstack Developer
                  </Typography>
                  <Typography variant="body1" 
                            //   align="center"
                              style={{color:"tomato"}}
                   >
                      General Assembly, Atlanta GA
                  </Typography>
                  <Typography variant="subtitle1" 
                            //   align="center"
                              style={{color:"tan"}}
                   >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia accusamus iusto earum illum dignissimos ex, eum facere saepe voluptatibus nisi minus neque optio, atque nobis doloribus voluptates eaque ea nulla?
                  </Typography>
              </Box>

              <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                 2020 
              </Typography>

              <Box component="div" className={classes.timeLineItem}>
                  <Typography variant="h5" 
                            //   align="center" 
                              className={classes.subHeading}
                  >
                      Lead Line Cook
                  </Typography>
                  <Typography variant="body1" 
                            //   align="center"
                              style={{color:"tomato"}}
                   >
                      Bold Monk Brewing, Atlanta,GA
                  </Typography>
                  <Typography variant="subtitle1" 
                            //   align="center"
                              style={{color:"tan"}}
                   >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia accusamus iusto earum illum dignissimos ex, eum facere saepe voluptatibus nisi minus neque optio, atque nobis doloribus voluptates eaque ea nulla?
                  </Typography>
              </Box>

              <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                 2019
              </Typography>

              <Box component="div" className={classes.timeLineItem}>
                  <Typography variant="h5" 
                            //   align="center" 
                              className={classes.subHeading}
                  >
                      Executive Chef
                  </Typography>
                  <Typography variant="body1" 
                            //   align="center"
                              style={{color:"tomato"}}
                   >
                      Comet Pub and Lanes, Decatur, GA
                  </Typography>
                  <Typography variant="subtitle1" 
                            //   align="center"
                              style={{color:"tan"}}
                   >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia accusamus iusto earum illum dignissimos ex, eum facere saepe voluptatibus nisi minus neque optio, atque nobis doloribus voluptates eaque ea nulla?
                  </Typography>
              </Box>

              <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                 2016 
              </Typography>

              <Box component="div" className={classes.timeLineItem}>
                  <Typography variant="h5" 
                            //   align="center" 
                              className={classes.subHeading}
                  >
                      Chef de Partie
                  </Typography>
                  <Typography variant="body1" 
                            //   align="center"
                              style={{color:"tomato"}}
                   >
                      Hampton & Hudson, Atlanta GA
                  </Typography>
                  <Typography variant="subtitle1" 
                            //   align="center"
                              style={{color:"tan"}}
                   >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia accusamus iusto earum illum dignissimos ex, eum facere saepe voluptatibus nisi minus neque optio, atque nobis doloribus voluptates eaque ea nulla?
                  </Typography>
              </Box>

              <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                 2010 
              </Typography>

              <Box component="div" className={classes.timeLineItem}>
                  <Typography variant="h5" 
                            //   align="center" 
                              className={classes.subHeading}
                  >
                      Sous Chef
                  </Typography>
                  <Typography variant="body1" 
                            //   align="center"
                              style={{color:"tomato"}}
                   >
                      Marriott Hotels, Atlanta GA
                  </Typography>
                  <Typography variant="subtitle1" 
                            //   align="center"
                              style={{color:"tan"}}
                   >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia accusamus iusto earum illum dignissimos ex, eum facere saepe voluptatibus nisi minus neque optio, atque nobis doloribus voluptates eaque ea nulla?
                  </Typography>
              </Box>
          </Box>
      </Box>
    </>

    )
}

export default Resume
