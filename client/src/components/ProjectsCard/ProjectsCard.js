import React from "react";
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { GridListTile, GridListTileBar } from "@material-ui/core";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

const ProjectsCard = ({ image, gitHubLink, title, webLink }) => {
    return (
        <GridListTile>
            <a href={webLink}><img src={image} alt={title} height="200vh"/></a>
            <GridListTileBar
                title = {title}
                subtitle = {<a href={gitHubLink} style={{ color: "white" }}>Repo Link</a>}
            />   
        </GridListTile>
        // <Card style={cardstyle}>
        //     <CardActionArea>
        //         <CardMedia 
        //             component="img"
        //             src={image}
        //             title={title}
        //             height="10%"
        //             width="10%"
        //         />
        //     </CardActionArea>
        //     <CardContent style={innerStyle}>
        //         <Typography gutterBottom variant="h5" component="h4">
        //             {title}
        //         </Typography>
        //         <ExpansionPanel style={innerStyle}>
        //             <ExpansionPanelSummary>
        //                     <Typography>Project Description</Typography>
        //             </ExpansionPanelSummary>
        //             <ExpansionPanelDetails>
        //                 <Typography component="p" color="textSecondary">
        //                     {description}
        //                 </Typography>
        //             </ExpansionPanelDetails>
        //         </ExpansionPanel>
        //     </CardContent>
        //     <CardActions>
        //         <Button size="small" color="secondary" href={gitHubLink}>GitHub Repo</Button>
        //         <Button size="small" color="primary" href={webLink}>Site</Button>
        //     </CardActions>
        // </Card> 
    )
}

export default ProjectsCard;