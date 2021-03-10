import React from "react";
import '../styles/landing.css';
import axios from 'axios';
import {Link} from "react-router-dom";

class Landing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: [],
        };
    }

    async handleClick(e) {
        e.preventDefault();
        let results = [];
        let name = String(document.getElementById("search").value);
        await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`).then(res => {
            if (res.data.meals) {
            results = res.data.meals;
        
        } else {
            results = [];
        }
            this.setState({recipes: results});
        });
        document.getElementById("goNext").click();
    }

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
                        <button type ="submit" onClick={this.handleClick.bind(this)}>Go</button>
                            <Link id="goNext"
                            to= {{
                                pathname: '/Search',
                                state: {data: this.state.recipes}
                            }}
                            ></Link>

                    </form>
                </div>
            </main>
        )
    }
}

export default Landing;
