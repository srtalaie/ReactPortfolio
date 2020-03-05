import React from "react";
import { GridListTile, GridListTileBar } from "@material-ui/core";

const ProjectsCard = ({ image, gitHubLink, title, webLink }) => {
    return (
        <GridListTile style={{ display: "flex", justifyContent: "center" }}>
            <a href={webLink}><img src={image} alt={title} height="200vh"/></a>
            <GridListTileBar
                title = {title}
                subtitle = {<a href={gitHubLink} style={{ color: "white" }}>Repo Link</a>}
            />   
        </GridListTile>
    )
}

export default ProjectsCard;