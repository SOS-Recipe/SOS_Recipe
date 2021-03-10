import React from "react";
import "../styles/search.css";
import { Link } from "react-router-dom";
import axios from 'axios';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      head_text: "",
      queryKeys: [],
      ingredient_items: [],
      clicked: false,
      backgroundImg: `url('../images/landing-background.jpg')`,
      recipes: [],
    };
  }

  componentDidMount() {
    document.title = "SOS_Recipe";
    console.log(this.props.location.state.data);
    this.setState({recipes: this.props.location.state.data})
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
  }

  over(strMeal) {
    console.log(strMeal);
    let i = 0;
    for (i = 0; i < this.props.location.state.data.length; i++) {
      if (strMeal === this.props.location.state.data[i].strMeal) {
        console.log(this.props.location.state.data[i].strMealThumb);
        this.setState({
          head_text: strMeal,
          backgroundImg: this.props.location.state.data[i].strMealThumb,
        });
      }
    }
  }

  render() {
    return (
      <main>
        <div class="flex_container">
          <div class="search_results_wrapper">
            <form class="search_form" name="searchbar">
              <input
                class="search"
                type="search"
                placeholder="Search for a recipe"
                id="search"
                autofocus
                required
              />
              <button type="submit" class="go_btn" onClick={this.handleClick.bind(this)}>
                Go
              </button>
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
              {this.state.recipes.map((recipe) => (
                <button
                  id={`${recipe.strMeal}`}
                  type="submit"
                  class="btn border-primary btn-light btn-lg btn-block"
                  onMouseOver={() => this.over(`${recipe.strMeal}`)}
                >
                  <Link
                    id={`recipe:${recipe.strMeal}`}
                    to={{
                      pathname: "/Recipe",
                      state: {
                        data: this.props.location.state.data,
                        recipe: recipe,
                      },
                    }}
                  >
                    {recipe.strMeal}
                  </Link>
                </button>
              ))}
            </div>
          </div>
          <div
            class="output"
            style={{ backgroundImage: `url(${this.state.backgroundImg})` }}
          >
            <h1 id="mealName">{this.state.head_text}</h1>
          </div>
        </div>
      </main>
    );
  }
}

export default Search;

/*
TODO:
    crashes if data is null (since map is called on data)
    buttons don't overflow properly
    make it work on smaller screens

    buttons have outline


                        <div class="results_btn">
                          {this.props.location.state.data === null?
                            <p>No results!</p>:
                            {this.props.data.map(recipe => 
                              <button 
                                type="button" 
                                class="btn border-primary btn-light btn-lg btn-block" 
                                onClick>{recipe.strMeal}
                              </button>
                            )}
                          }
                        </div>   

TO GO IN LANDING:
                        <br></br>

*/
