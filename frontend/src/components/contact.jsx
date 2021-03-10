import React from "react";
import '../styles/contact.css'
import contactText from '../writing/contactText.jsx'

class Contact extends React.Component {
    componentDidMount() {
        document.title="SOS_Recipe"
    }
    render() {
        const myText = contactText;
        return(
            <body class="ContactPage">
                <div class="ContactBody">
                    <div class='content'>
                        <h1>Contact Us</h1>
                        <p class="ContactText">{myText}</p>
                    </div>
                </div>
            </body>
        )
    }
}


// iamge source: https://unsplash.com/photos/4_jhDO54BYg
export default Contact;