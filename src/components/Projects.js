import React from 'react'
import NavBar from './NavBar';
import project1 from "../images/Battleship.jpg";
import project2 from "../images/allInYourBusiness.png";
import project3 from "../images/void.png";
import project4 from "../images/record.png";
import { makeStyles } from '@material-ui/core/styles';
import { Typography, 
         Box,
         Grid,
         Card,
         CardActionArea,
         CardActions,
         CardContent,
         CardMedia,
         Button } from '@material-ui/core';

const useStyles = makeStyles({
    mainContainer: {
        background: "#233",
        height: "100%"
    },
    cardContainer: {
       maxWidth: 345,
       margin: "5rem auto"
        
    },
    a: {
        textDecoration: "none"
    }
})

const Projects = () => {
    const classes = useStyles()
    return (
        <Box component="div" className={classes.mainContainer}>
             <NavBar/>
             <Grid container justify="center">
              {/* PROJECT 1 CARD */}
               <Grid item xs={12} sm={8} md={6}>
                <Card className={classes.cardContainer}>
                    <CardActionArea>
                        <CardMedia component="img" 
                                   alt="Project 1"
                                   height="140"
                                   image={project1}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5">
                                BattleShip
                            </Typography>
                            <Typography variant="body2"              color="textSecondary" component="p">
                                Classic BattleShip Game 
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                        
                        <CardActions>
                            {/* <Button size="small" color="primary">
                                Demo
                            </Button> */}
                            <Button size="small" color="primary">
                            <a  className={classes.a} href="https://github.com/supershay84/Project-1">
                                GitHub
                                </a>
                            </Button>
                        </CardActions>
                </Card> 
               </Grid>
                {/* PROJECT 2 CARD */}
               <Grid item xs={12} sm={8} md={6}>
                <Card className={classes.cardContainer}>
                    <CardActionArea>
                        <CardMedia component="img" 
                                   alt="Project 2"
                                   height="140"
                                   image={project2}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5">
                                All in Your Business
                            </Typography>
                            <Typography variant="body2"              color="textSecondary" component="p">
                                App to discover and share small businesses.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                        
                        <CardActions>
                            {/* <Button size="small" color="primary">
                                Demo
                            </Button> */}
                            <Button size="small" color="primary">
                            <a className={classes.a} href="https://github.com/supershay84/Project-3">
                                GitHub
                                </a>
                            </Button>
                        </CardActions>
                </Card> 
               </Grid>
                {/* PROJECT 3 CARD */}
               <Grid item xs={12} sm={8} md={6}>
                <Card className={classes.cardContainer}>
                    <CardActionArea>
                        <CardMedia component="img" 
                                   alt="Project 3"
                                   height="140"
                                   image={project3}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5">
                                The Void
                            </Typography>
                            <Typography variant="body2"              color="textSecondary" component="p">
                                Social media app where you SCREAM INTO THE VOID!
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                        
                        <CardActions>
                            {/* <Button size="small" color="primary">
                                Demo
                            </Button> */}
                            <Button size="small" color="primary">
                            <a className={classes.a} href="https://github.com/supershay84/TheVoid">
                                GitHub
                                </a>
                            </Button>
                        </CardActions>
                </Card> 
               </Grid>
                {/* PROJECT 4 CARD */}
               <Grid item xs={12} sm={8} md={6}>
                <Card className={classes.cardContainer}>
                    <CardActionArea>
                        <CardMedia component="img" 
                                   alt="Project 4"
                                   height="140"
                                   image={project4}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5">
                                Record Collection
                            </Typography>
                            <Typography variant="body2"              color="textSecondary" component="p">
                                Group Project using Ruby on Rails and React
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                        
                        <CardActions>
                            {/* <Button size="small" color="primary">
                                Demo
                            </Button> */}
                            <Button size="small" color="primary">
                            <a className={classes.a} href="https://github.com/supershay84/Record-Collection">
                                GitHub
                                </a>
                            </Button>
                        </CardActions>
                </Card> 
               </Grid>
             </Grid>
        </Box>
    )
};

export default Projects;