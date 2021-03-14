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
      recipes: this.props.location.state.data,
      loading: true,
    };
  }

  componentDidMount() {
    document.title = "SOS_Recipe";
    this.setRecipes();
  }

  async setRecipes () {
    await this.setState({recipes: this.props.location.state.data}, () => {
      console.log(this.state.recipes);
      this.setState({loading: false});
    });
  }

  async handleClick(e) {
    e.preventDefault();
        let results = [];
        let regionFlag = false;
        let catagoryFlag = false;
        let req = "https://www.themealdb.com/api/json/v1/1/";
        if(document.getElementById("catagory_drop").value !== "") {
          req += "filter.php?c=" + document.getElementById("catagory_drop").value;
          if (document.getElementById("search").value !== "") {
              req += "&s=" + String(document.getElementById("search").value)
          }
          catagoryFlag = true;
        } 
        else if (document.getElementById("region_drop").value !== "") {
            req += "filter.php?a=" + document.getElementById("region_drop").value;
            regionFlag = true;
        } 
        else {
            req += "search.php?s=" + String(document.getElementById("search").value);
        }
        console.log("req: " + req);
        await axios.get(req).then(res => {
            if (res.data.meals) {
                results = res.data.meals;
                if (regionFlag) {
                  console.log("results prior to getmeals");
                  console.log(results);
                  results = this.getMealsById(results);
                  console.log("results post call to getmeals");
                  console.log(results);
                }
                else if (catagoryFlag) {
                  console.log("results prior to getmeals");
                  console.log(results);
                  results = this.getMealsById(results);
                  console.log("results post call to getmeals");
                  console.log(results);
                }
        } else {
            results = [];
            console.log("empty results")
        }
            this.setState({recipes: results});
        });
    }

    getMealsById(results) {
        console.log("getting recipes");
        let ret = [];
        let req = "";
        results.forEach(recipe => {
            req = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + recipe.idMeal;
            axios.get(req).then(res => {
                ret.push(res.data.meals[0]);
            });
        });
        return ret;
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
              { !this.state.loading && 
              this.state.recipes.map((recipe) => (
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
  search goes over navbar
  filters
  conatact and about text
*/
