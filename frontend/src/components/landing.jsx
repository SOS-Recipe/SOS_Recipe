import React from "react";
import '../styles/landing.css';


class Landing extends React.Component {
    componentDidMount() {
        document.title="SOS_Recipe"
    }
    render() {
        return(
            <main>
                <div className='Landing-component'>
                    <h1>SOS Recipe</h1>
                    <form name="searchbar">
                        <input type="search" placeholder="Search for a recipe" id="search" autofocus required/>
                        <button type ="submit">Go</button>
                    </form>
                </div>
            </main>
        )
    }
}

export default Landing;