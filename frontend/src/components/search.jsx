import React from "react";
import '../styles/search.css';
import {Link} from "react-router-dom";

class Search extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        document.title="SOS_Recipe"
        console.log(this.props.location.state.data);
    }

    render() {
        return(
            <main>
                <div class="flex_container">
                    <div class="search_results_wrapper">
                        <form class="search_form" name="searchbar">
                            <input class="search" type="search" placeholder="Search for a recipe" id="search" autofocus required/>
                            <button type ="submit" class="go_btn">Go</button>
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
                        <div class="results_btn">
                                {this.props.location.state.data.map(recipe => 
                                <button type="submit" class="btn border-primary btn-light btn-lg btn-block" >
                                    <Link id={`recipe:${recipe.strMeal}`} 
                                    to= {{
                                        pathname:'/Recipe',
                                        state: {data: this.props.location.state.data, recipe: recipe}
                                    }}>
                                        {recipe.strMeal}
                                    </Link>
                                    </button>)}

                        </div>   
                    </div>
                    <div class="output">
                        <h1>strMeal</h1>
                        <div class = "ing_meas_wrap">
                            <p class="ingredients">
                                strIngredient
                            </p>
                            <p class="measurements">
                                strMeasure
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

export default Search;

/*
strMeal =           meal name
strCategory =       main ingredient
strArea =           region
strInstructions
strMealThumb =      meal image
strIngredient<num> =ingredient <num>, only up to 20
strMeasure<num> =   measurement of ingredient <num>, only up to 20


style="background-image: url('img_girl.jpg');"

TODO:
    buttons have strMealThumb as background image
    buttons have outline
    output has dynamic information
*/