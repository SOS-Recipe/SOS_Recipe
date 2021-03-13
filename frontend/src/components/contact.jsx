import React from "react";
import '../styles/contact.css'
import contactTextDavid from '../writing/contactTextDavid.jsx'
import contactTextSam from '../writing/contactTextSam.jsx'
import contactTextJonathan from '../writing/contactTextJonathan.jsx'
import contactTextProject from '../writing/contactTextProject.jsx'

class Contact extends React.Component {
    componentDidMount() {
        document.title="SOS_Recipe"
    }
    render() {
        const DavidText = contactTextDavid;
        const SamText = contactTextSam;
        const JonathanText = contactTextJonathan;
        const ProjectText = contactTextProject;
        return(
            <body class="ContactPage">
                <div class="ContactBody">
                    <div class='Project'>
                        <h1>SOS Recipe</h1>
                        <ul class="ContactList">
                            <li>
                                <p>
                                    {ProjectText[0]}
                                </p>
                            </li>
                        </ul>
                    </div>
                    <br></br>
                    <div class='Person'>
                        <h1>Sam Young</h1>
                        <ul class="ContactList">
                            <li>
                                <p>
                                    {SamText[0]}
                                </p>
                            </li>
                            <li>
                                <p>
                                    {SamText[1]}
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div class='Person'>
                        <h1>David Froman</h1>
                        <ul class="ContactList">
                            <li>
                                <p>
                                    {DavidText[0]}
                                </p>
                            </li>
                            <li>
                                <p>
                                    {DavidText[1]}
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div class='Person'>
                        <h1>Jonathan</h1>
                        <ul class="ContactList">
                            <li>
                                <p>
                                    {JonathanText[0]}
                                </p>
                            </li>
                            <li>
                                <p>
                                    {JonathanText[1]}
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </body>
        )
    }
}


// iamge source: https://unsplash.com/photos/4_jhDO54BYg
export default Contact;