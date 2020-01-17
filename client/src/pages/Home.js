import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { GridListTile, Typography } from "@material-ui/core";
import profilePic from "../assets/images/profilePic.jpg";
import ProjectsCard from "../components/ProjectsCard/ProjectsCard";
import ProjectsArr from "../assets/projects/projects";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ReactTransitionGroup from 'react-addons-transition-group'
import GridList from '@material-ui/core/GridList';
import githubLogo from '../assets/images/githubLogo.png';
import linkedinLogo from '../assets/images/linkedinLogo.png';


const headingStyles = {
    margin: 20
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

const linkAndLogoStyles = {
    display: 'flex',
    flexDirection: 'row',
}


class Home extends Component {
    state = {
        mounted: false
    }

    componentDidMount(){
        this.setState({mounted: true});
    }

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
                <ReactTransitionGroup>
                <ReactCSSTransitionGroup
                    transitionName="fade"
                    transitionAppear={true}
                    transitionAppearTimeout={3000}
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}
                >
                <Typography
                    variant="h6"
                    align="center" 
                    color="textSecondary" 
                    paragraph
                    style={{margin: 20}}
                    key={1}
                >
                    Web developer with a passion for creating elegant, mobile responsive, functional websites. Fast learner, creative and resourceful with a penchant for problem solving and critical thinking. An eye for detail and always looking for the next challenge to overcome.
                </Typography>
                </ReactCSSTransitionGroup>
                </ReactTransitionGroup>
                <Grid container
                    justify="center"
                >
                    <img src={profilePic} alt="Profile Pic" style={profileImgStyle}></img>

                </Grid>
                <Grid container justify="center" style={{ marginBottom : "40px" }}>
                    <div>
                        <div style={linkAndLogoStyles}>
                            <img src={githubLogo} alt="githublogo" height='32' width='32' /><a href="https://github.com/srtalaie" style={profileLinks}>GitHub Profile</a>
                            <img src={linkedinLogo} alt="githublogo" height='32' width='32' /><a href="https://www.linkedin.com/in/sasha-talaie/" style={profileLinks}>LinkedIn Profile</a></div>
                        </div>
                </Grid>
                <h1 style={{ textAlign: "center", marginBottom: "40px" }}>Projects</h1>
                <GridList cellHeight={'auto'} cols={3} spacing={24}>
                    {ProjectsArr.map(project => {
                        return(
                            <GridListTile>
                                <ProjectsCard key={project.id} 
                                    image = {project.image}
                                    title = {project.title}
                                    gitHubLink = {project.gitHubLink}
                                    webLink = {project.webSiteLink}
                                />
                            </GridListTile>
                        )
                    })}
                </GridList>
            </div> 
        )
    }
}

export default Home;