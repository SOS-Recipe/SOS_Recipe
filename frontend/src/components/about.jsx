import React from "react";
import '../styles/about.css'
import aboutTextDavid from '../writing/aboutTextDavid.jsx'
import aboutTextSam from '../writing/aboutTextSam.jsx'
import aboutTextJonathan from '../writing/aboutTextJonathan.jsx'
import aboutTextProject from '../writing/aboutTextProject.jsx'
class About extends React.Component {

    constructor(props){
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
        document.title="SOS_Recipe"
    }

    render() {
        const DavidText = aboutTextDavid;
        const SamText = aboutTextSam;
        const JonathanText = aboutTextJonathan;
        const ProjectText = aboutTextProject;
        return(
            <body class="AboutPage">
                <div class="AboutBody">
                    <div class='Project'>
                        <h1>SOS Recipe</h1>
                        <p class="AboutText">{ProjectText}</p>
                    </div>
                    <br></br>
                    <div class='Person'>
                        <h1>Sam Youngs</h1>
                        <p class="AboutText">{SamText}</p>
                    </div>
                    <div class='Person'>
                        <h1>David Froman</h1>
                        <p class="AboutText">{DavidText}</p>
                    </div>
                    <div class='Person'>
                        <h1>Jonathan</h1>
                        <p class="AboutText">{JonathanText}</p>
                    </div>
                </div>
            </body>
        )
    }
}


// iamge source: https://unsplash.com/photos/4_jhDO54BYg
export default About;