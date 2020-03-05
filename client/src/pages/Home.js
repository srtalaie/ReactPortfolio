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
import htmlLogo from '../assets/images/icons/html.png';
import cssLogo from '../assets/images/icons/css.png';
import ajaxLogo from '../assets/images/icons/ajax.png';
import bootstrapLogo from '../assets/images/icons/bootstrap.png';
import gitLogo from '../assets/images/icons/git.png';
import jqueryLogo from '../assets/images/icons/jquery.png';
import jsLogo from '../assets/images/icons/js.png';
import jsonLogo from '../assets/images/icons/json.png';
import materializeLogo from '../assets/images/icons/materialize.png';
import mongodbLogo from '../assets/images/icons/mongodb.png';
import mySQLLogo from '../assets/images/icons/mySQL.png';
import nodeLogo from '../assets/images/icons/nodejs.png';
import reactLogo from '../assets/images/icons/react.png';


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

const liNoBullet = {
    listStyleType: 'none',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: "wrap",
    justifyContent: "center"
}

const liStyle = {
    margin: '10px'
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
                <Grid container
                    justify="center"
                >
                    <img src={profilePic} alt="Profile Pic" style={profileImgStyle}></img>

                </Grid>
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
                            style={{marginLeft: 20, marginRight: 20, marginTop: 20, marginBottom: 20}}
                            key={1}
                        >
                            Web developer with a passion for creating elegant, mobile responsive, functional websites. Fast learner, creative and resourceful with a penchant for problem solving and critical thinking. An eye for detail and always looking for the next challenge to overcome. <p>No task too big or too small. No technology out of my wheelhouse. No mountain high, no valley low.</p>
                        </Typography>
                        <Grid container justify="center" style={{ marginBottom : "75px" }}>
                            <div>
                                <div style={linkAndLogoStyles}>
                                <a href="https://github.com/srtalaie" style={profileLinks}><img src={githubLogo} alt="githublogo" height='32' width='32' title="GitHub Profile"/></a>
                                <a href="https://www.linkedin.com/in/sasha-talaie/" style={profileLinks}><img src={linkedinLogo} alt="githublogo" height='32' width='32' title="LinkedIn Profile"/></a></div>
                                </div>
                        </Grid>
                    </ReactCSSTransitionGroup>
                </ReactTransitionGroup>
               
                <Grid container justify="center" style={{ marginBottom : "25vh" }}>
                    <div>
                        <ReactCSSTransitionGroup
                            transitionName="fadeInIcon"
                            transitionAppear={true}
                            transitionAppearTimeout={3500}
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
                                Experience with:
                                    <ul style={liNoBullet}>
                                        <li style={liStyle}><img src={htmlLogo} alt="html-logo" height="50" width="50" title="HTML"/></li>
                                        <li style={liStyle}><img src={cssLogo} alt="css-logo" height="50" width="50" title="CSS"/></li>
                                        <li style={liStyle}><img src={jsLogo} alt="js-logo" height="50" width="50" title="JavaScript"/></li>
                                        <li style={liStyle}><img src={jqueryLogo} alt="jquery-logo" height="50" width="50" title="JQuery"/></li>
                                        <li style={liStyle}><img src={ajaxLogo} alt="ajax-logo" height="50" width="50" title="AJAX"/></li>
                                        <li style={liStyle}><img src={jsonLogo} alt="json-logo" height="50" width="50" title="JSON"/></li>
                                        <li style={liStyle}><img src={bootstrapLogo} alt="bootstrap-logo" height="50" width="50" title="Bootstrap"/></li>
                                        <li style={liStyle}><img src={materializeLogo} alt="materialize-logo" height="50" width="50" title="Materialize/MaterialUI"/></li>
                                        <li style={liStyle}><img src={gitLogo} alt="git-logo" height="50" width="50" title="Git"/></li>
                                        <li style={liStyle}><img src={nodeLogo} alt="node-logo" height="50" width="50" title="NodeJS/Express"/></li>
                                        <li style={liStyle}><img src={reactLogo} alt="react-logo" height="50" width="50" title="React"/></li>
                                        <li style={liStyle}><img src={mySQLLogo} alt="mysql-logo" height="50" width="50" title="MySQL"/></li>
                                        <li style={liStyle}><img src={mongodbLogo} alt="mongodb-logo" height="50" width="50" title="MongoDB"/></li>
                                    </ul>
                            </Typography>
                        </ReactCSSTransitionGroup>
                    </div>
                </Grid>
                <h1 style={{ textAlign: "center", marginBottom: "40px" }}>Projects</h1>
                <GridList cellHeight={'auto'} cols={3} spacing={24} style={{ justifyContent: "center", margin: '0px' }}>
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