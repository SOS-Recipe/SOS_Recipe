import React from "react";
import "../styles/contact.css";
import contactTextDavid from "../writing/contactTextDavid.jsx";
import contactTextSam from "../writing/contactTextSam.jsx";
import contactTextJonathan from "../writing/contactTextJonathan.jsx";
import contactTextProject from "../writing/contactTextProject.jsx";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
    };
  }

  componentDidMount() {
    document.title = "SOS_Recipe";
    this.getContacts();
  }

  getContacts = () => {
    fetch("/getContacts")
      .then((res) => res.json())
      .then((contacts) => this.setState({ contacts }));
    console.log(this.state.contacts);
  };

  render() {
    const ProjectText = contactTextProject;
    return (
      <body class="ContactPage">
        <div class="ContactBody">
          <div class="Project">
            <h1>SOS Recipe</h1>
            <ul class="ContactList">
              <li>{ProjectText[0]}</li>
            </ul>
          </div>
          <br></br>
          {this.state.contacts.map((contact) => (
            <div class="Person">
              <h1>{contact.name}</h1>
              <ul class="ContactList">
                <li>Email: {contact.email}</li>
                <li>GitHub: {contact.github}</li>
              </ul>
            </div>
          ))}
        </div>
      </body>
    );
  }
}

// iamge source: https://unsplash.com/photos/4_jhDO54BYg
export default Contact;
