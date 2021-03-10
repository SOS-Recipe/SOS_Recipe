import React from "react";
import '../styles/contact.css'
import aboutText from '../writing/text.jsx'

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          head_text: aboutText,
        }
    }

    componentDidMount() {
        document.title="SOS_Recipe"
    }
    render() {
        const myText = aboutText;
        return(
            <body class="ContactPage">
                <div class="ContactBody">
                    <div class='content'>
                        <h1>Contact Us</h1>
                        <p>{myText}</p>
                    </div>
                </div>
            </body>
        )
    }
}


// iamge source: https://unsplash.com/photos/4_jhDO54BYg
export default Contact;