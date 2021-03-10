import React from "react";
import '../styles/about.css'
import aboutText from '../writing/aboutText.jsx'
class About extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            contacts:[]
        }
    }

    componentDidMount() {
        document.title="SOS_Recipe"
        this.getContacts();
    }

    // Gets the list of contact info from the express app
    getContacts = () => {
        fetch('/getContacts')
        .then(res => res.json())
        .then(contacts => this.setState({contacts}))
    }

    render() {
        const myText = aboutText;
        return(
            <body class="AboutPage">
                <div class="AboutBody">
                    <div class='content'>
                        <h1>About Us</h1>
                        <p class="AboutText">{myText}</p>
                        <ul>
                            {this.state.contacts.map(contact => 
                                (<li>{contact}</li>))}
                        </ul>
                    </div>
                </div>
            </body>
        )
    }
}


// iamge source: https://unsplash.com/photos/4_jhDO54BYg
export default About;