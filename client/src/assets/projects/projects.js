import RTBuddy from "../images/rtbuddy.png";
import PaiMai from "../images/paimai.png";
import CrystallsCollector from "../images/crystallscollector.png";

const Projects = [
    {
        id: 1,
        title: "RoadTrip Buddy",
        gitHubLink: "https://github.com/stannous2/Project1",
        description: "Directions to your destination (both text and map). See what the weather is like at your destination. See how long your trip will take and how far you need to go.",
        image: require("../images/rtbuddy.png")
    },
    {
        id: 2,
        title: "PaiMai",
        gitHubLink: "https://github.com/zaneneuschuler/Project3",
        description: "A web app to use to connect people with yard sales, to people who want to go to yard sales. Post you yard sale and the items, location, date. Or search for yard sales in your area by zip code and view them.",
        image: require("../images/paimai.png")
    },
    {
        id: 3,
        title: "Crystalls Collector",
        gitHubLink: "https://github.com/srtalaie/crystals-collector",
        description: "In this game you will try to guess which each crystals numerical value is. And afterwards you will have to collect the correct amount of crystals to reach the score of a randomly generated number. If you reach that number without going over you win. If you do go over however you lose and the game will re-initialize itself with new values for each crystal.",
        image: require("../images/crystallscollector.png")
    }
]

export default Projects;