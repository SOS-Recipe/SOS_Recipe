import React from "react";
import '../styles/landing.css';
import axios from 'axios';
import Search from './search';

class Landing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: [],
            clicked: false,
        };
    }

    searchRecipe(e) {
        e.preventDefault();
        let name = String(document.getElementById("search").value);
        axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`).then(res => {
            console.log(res.data);
            this.setState({recipes: res.data.meals});
        });
        this.setState({clicked: true});
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
                        <button type ="submit" onClick={this.searchRecipe.bind(this)}>Go</button>
                        {this.state.clicked? 
                        <Search data={this.state.recipes}/> :
                        null}
                    </form>
                </div>
            </main>
        )
    }

export default Landing;
