import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { CardActionArea, CardActions } from "@material-ui/core";
import profilePic from "../assets/images/profilePic.jpg";
import ProjectsCard from "../components/ProjectsCard/ProjectsCard";
import ProjectsArr from "../assets/projects/projects";

const headingStyles = {
    margin: 20
}

const cardStyles = {
    width: "25%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center"
}

const projectCardStyles = {
    margin: 40
}

const profileImgStyle = {
    height: "60%",
    width: "60%",
    margin: 10,
    boxShadow: "2px 4px 2px grey"
}

const profileLinks = {
    color: "black",
    margin: 8
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
                    style={{margin: 20}}
                >
                    Web developer with a passion for creating elegant, mobile responsive, functional websites. Fast learner, creative and resourceful with a penchant for problem solving and critical thinking. An eye for detail and always looking for the next challenge to overcome.
                </Typography>
                <Grid container
                    justify="center"
                >
                    {/* Old Profile image Card
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
                                <Button size="small" color="primary" href="https://github.com/srtalaie">GitHub</Button>
                                <Button size="small" color="primary" href="https://www.linkedin.com/in/sasha-talaie/">LinkedIn</Button>
                            </CardActions>
                        </Card>  
                    */}

                    <img src={profilePic} alt="Profile Pic" style={profileImgStyle}></img>

                </Grid>
                <Grid container justify="center">
                    <div>
                        <a href="https://github.com/srtalaie" style={profileLinks}>GitHub Profile</a>
                        <a href="https://www.linkedin.com/in/sasha-talaie/" style={profileLinks}>LinkedIn Profile</a>
                    </div>
                </Grid>

                <Grid container
                    lg={"auto"} md={"auto"} sm={"auto"} xl={"auto"} xs={"auto"}
                    justify="center"
                    wrap="no-wrap"
                    spacing={16}
                >
                    {ProjectsArr.map(project => {
                        return(
                            <Grid item xs>
                                <ProjectsCard key={project.id} 
                                    image = {project.image}
                                    title = {project.title}
                                    gitHubLink = {project.gitHubLink}
                                    description = {project.description}
                                    cardstyle = {projectCardStyles}
                                />
                            </Grid>
                        )
                    })}
                </Grid>
            </div> 
        )
    }
}

export default Home;