import React from "react";

class Landing extends React.Component {
    componentDidMount() {
        document.title="SOS_Recipe"
    }
    render() {
        return(
            <main>
                <h1>SOS_Recipe</h1>
                <p>Landing page.</p>
            </main>
        )
    }
}

export default Landing;