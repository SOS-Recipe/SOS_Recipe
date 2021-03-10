import React from "react";
import '../styles/about.css'
import aboutText from '../writing/aboutText.jsx'
class About extends React.Component {
    componentDidMount() {
        document.title="SOS_Recipe"
    }
    render() {
        const myText = aboutText;
        return(
            <body class="AboutPage">
                <div class="AboutBody">
                    <div class='content'>
                        <h1>About Us</h1>
                        <p class="AboutText">{myText}</p>
                    </div>
                </div>
            </body>
        )
    }
}


// iamge source: https://unsplash.com/photos/4_jhDO54BYg
export default About;