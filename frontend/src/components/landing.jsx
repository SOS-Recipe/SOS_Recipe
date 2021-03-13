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

    async handleAllClick(e) {
        e.preventDefault();
        let results = [];
        let resIndex = 0;
        let temp = [];
        let i = 0;
        let letter = (0+10).toString(36);
        //let name = String(document.getElementById("search").value);

        for (i = 0; i < 26; i++){
            letter = (i+10).toString(36)

            await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`).then(res => {
                if (res.data.meals) {
                temp = res.data.meals;
            
            } else {
                temp = [];
            }
                let j = 0;
                for (j = 0; j < temp.length; j++){
                    results[resIndex] = temp[j];
                    resIndex += 1;
                }
                //results = this.state.recipes
                //console.log(this.state.recipes)       why is this working?
                console.log(temp.length)
                
            });

        }
        this.setState({recipes: results});
        document.getElementById("goNextAll").click();
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
                        <button type ="submit" onClick={this.handleAllClick.bind(this)}>Go</button>
                            <Link id="goNextAll"
                            to= {{
                                pathname: '/displayAll',
                                state: {data: this.state.recipes}
                            }}
                            ></Link>
                        <br></br>
                        <select name="catagory" id="catagory_drop" class="catagory_drop">
                            <option value="">Any Catagory</option>
                            <option value="Beef">Beef</option>
                            <option value="Breakfast">Breakfast</option>
                            <option value="Chicken">Chicken</option>
                            <option value="Dessert">Dessert</option>
                            <option value="Goat">Goat</option>
                            <option value="Lamb">Lamb</option>
                            <option value="Miscellaneous">Miscellaneous</option>
                            <option value="Pasta">Pasta</option>
                            <option value="Pork">Pork</option>
                            <option value="Seafood">Seafood</option>
                            <option value="Side">Side</option>
                            <option value="Starter">Starter</option>
                            <option value="Vegan">Vegan</option>
                            <option value="Vegetarian">Vegetarian</option>
                        </select>
                        <select name="region" id="region_drop" class="region_drop">
                            <option value="">Any Area</option>
                            <option value="American">American</option>
                            <option value="British">British</option>
                            <option value="Canadian">Canadian</option>
                            <option value="Chinese">Chinese</option>
                            <option value="Dutch">Dutch</option>
                            <option value="Egyptian">Egyptian</option>
                            <option value="French">French</option>
                            <option value="Greek">Greek</option>
                            <option value="Indian">Indian</option>
                            <option value="Irish">Irish</option>
                            <option value="Italian">Italian</option>
                            <option value="Jamaican">Jamaican</option>
                            <option value="Japanese">Japanese</option>
                            <option value="Kenyan">Kenyan</option>
                            <option value="Malaysian">Malaysian</option>
                            <option value="Mexican">Mexican</option>
                            <option value="Moroccan">Moroccan</option>
                            <option value="Polish">Polish</option>
                            <option value="Portuguese">Portuguese</option>
                            <option value="Russian">Russian</option>
                            <option value="Spanish">Spanish</option>
                            <option value="Thai">Thai</option>
                            <option value="Tunisian">Tunisian</option>
                            <option value="Turkish">Turkish</option>
                            <option value="Unknown">Unknown</option>
                            <option value="Vietnamese">Vietnamese</option>                               
                        </select>
                    </form>
                </div>
            </main>
        )
    }
}

export default Landing;
