import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { CardActionArea, CardActions } from "@material-ui/core";
import profilePic from "../assets/images/profilePic.jpg";

const headingStyles = {
    margin: 20
}

const cardStyles = {
    width: "25%"
}

class Home extends Component {
    render(){
        return(
            <div>
                <Typography 
                    component="h1" 
                    variant="h2" 
                    align="center" 
                    color="textPrimary" 
                    style={headingStyles} 
                    gutterBottom
                > 
                    Sasha Talaie's Protfolio
                </Typography>
                <Typography
                    variant="h6"
                    align="center" 
                    color="textSecondary" 
                    paragraph
                >
                    Web developer with a passion for creating elegant, mobile responsive, functional websites. Fast learner, creative and resourceful with a penchant for problem solving and critical thinking. An eye for detail and always looking for the next challenge to overcome.
                </Typography>
                <Grid container
                    justify="center"
                >
                    <Card style={cardStyles}>
                        <CardActionArea>
                            <CardMedia 
                                component="img"
                                src={profilePic}
                                title="Sasha_Talaie"
                                height="50%"
                            />
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">GitHub</Button>
                            <Button size="small" color="primary">LinkedIn</Button>
                        </CardActions>
                    </Card> 
                </Grid>
            </div> 
        )
    }
}

export default Home;